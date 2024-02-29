
'use client'

import { signOut, useSession } from 'next-auth/react'

import Link from 'next/link'
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Header() {

    const [move, setmove] = useState("");
    const {data : session} = useSession();
  
    

           


    const logincheck= ()=>{
        if(session?.user?.email){
           setmove('addblog')
        }else{
            setmove('login')
        }
    }
    const singout= ()=>{
       signOut()
       redirect('/localhost:3000/');
    }
  return (
    <nav className="main_nav">
        <ul>
          <Link className="nav_link"  href={'/'}><li>Home</li></Link>
          <Link className="nav_link" href={'/about'}><li>About</li></Link>
          <Link className="nav_link" href={'/blog'}><li>Blog</li></Link>
          <Link className="nav_link" href={'/contact'}><li>Contact</li></Link>
          {
              session?.user?.name  && 
              <Link className="nav_link" href={'/addblog'}><li>Add Blog</li></Link> 
          
          }
          {
              session?.user?.name ? <button className="nav_link" onClick={()=>singout()}><li>Logout</li></button> :
              <Link className="nav_link" href={'/login'}><li>Login</li></Link> 
          
          }
         
        </ul>
      </nav>
  )
}
