import LoginForm from "../components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import BlogModel from '../models/blog';
import { connectMongoDB } from '../lib/db';
import Blog from '../components/Blog'

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  const fetchProducts = async (skip, limit = 3) => {
    try {
      await connectMongoDB();
      const data = await BlogModel.find()
        .sort({ _id: -1 }) // Ensure latest blogs are fetched first
        .skip(skip)
        .limit(limit)
        .maxTimeMS(30000); // 30 seconds timeout
  
      return data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return []; // Handle errors gracefully
    }
  }

const data = fetchProducts(0,3)
  // if (session) redirect("/localhost:3000/");

  return (
    
    <div className="">
      {/* <nav className="main_nav">
        <ul>
          <Link className="nav_link"  href={'/'}><li>Home</li></Link>
          <Link className="nav_link" href={'/about'}><li>About</li></Link>
          <Link className="nav_link" href={'/blog'}><li>Blog</li></Link>
          <Link className="nav_link" href={'/contact'}><li>Contact</li></Link>
        </ul>
      </nav> */}
      <div className=" title_container">
        <div className="lazy_coder">
          <h1>Lazy Coder</h1>
          <p>A blog for lazy coder to get their coding on.</p>
        </div>
       <div>
       <Image src='/coder.jpg' alt="" width={500} height={300} className="coderImage"></Image>
       </div>
      </div>

      <div className="blogs home_container">
        <h1 className="popular_blog">Latest Blog</h1>
        {/* <div className="blogItem">
          <h1 className="blog_title">How to learn JavaScript?</h1>
          <p className="blog_para">JavaScript is the language to build logic in web Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptate laudantium dolores ipsa. Obcaecati exercitationem quaerat, consequatur expedita fugit sit?</p>
        </div>
        <div className="blogItem">
          <h1 className="blog_title">How to learn JavaScript?</h1>
          <p className="blog_para">JavaScript is the language to build logic in web Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptate laudantium dolores ipsa. Obcaecati exercitationem quaerat, consequatur expedita fugit sit?</p>
        </div>
        <div className="blogItem">
          <h1 className="blog_title">How to learn JavaScript?</h1>
          <p className="blog_para">JavaScript is the language to build logic in web Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptate laudantium dolores ipsa. Obcaecati exercitationem quaerat, consequatur expedita fugit sit?</p>
        </div> */}
        
      </div>
      <Blog data={data}></Blog>
     
    </div>
  );
}