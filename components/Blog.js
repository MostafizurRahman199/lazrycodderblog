import Link from 'next/link'
import React from 'react'
import BlogModel from '../models/blog'
import { connectMongoDB } from '../lib/db'




await connectMongoDB()
// const fetchProducts = async ()=>{
//     try {
//       const data = await Blog.find().maxTimeMS(30000); // 30 seconds
      
//       return data;
//     } catch (error) {
//       console.log("Error : ", error);
//     }
// }

const fetchProducts = async (skip, limit = 3) => {
    try {
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
  };


export default async function blog() {
  const blogs = await fetchProducts();
  return (
    <div className="blogs home_container">
   

      {
        blogs?.map((blog)=>{
          return (
            <div className="blogItem" key={blog._id}>
            <Link className='link'  href={`/blog/${blog._id}`}>
            <h1 className="blog_title">{blog.title}</h1></Link>
            {/* <h3 className="blog_title">Author : {blog.author}</h3> */}
              <p className="blog_para">{blog.content.slice(0,100)+'...'}</p>

             
            </div>
          )
        })
      }
   
    
  
    
  </div>
  )
}
