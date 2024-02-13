import  bcrypt  from 'bcryptjs';
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { connectMongoDB } from "@/lib/db";
import User from "@/models/user";


  

export const  authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
          
          name: "Credentials",
          
          credentials: {
            
          },
          async authorize(credentials : any) {

            // const {email,password} = credentials;
            const email = credentials.email as string;
            const password = credentials.password as string;
            try {
                await connectMongoDB();
                const user = await User.findOne({email});

                if(!user){
                    return null;
                }

                const passwordMatch = await bcrypt.compare(password, user.password)

                if(!passwordMatch){
                    return null;
                }
                return user;
            } catch (error) {
                console.log("Error: ",error)
                
            }
          },
        }),
      ],
      session : {
        strategy: 'jwt'
      },
      secret : process.env.NEXTAUTH_SECRET,
      pages:{
        signIn:'/',

      }
};
const handler = NextAuth(authOptions);
export {handler as GET,handler as POST}
