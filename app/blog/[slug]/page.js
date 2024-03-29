
import { useRouter } from "next/navigation";
// import React, { useState } from "react";
import styles from "./Blog.module.css"; // Import CSS module
import { connectMongoDB } from '../../../lib/db';
import Blog from '../../../models/blog'
import Image from "next/image";
import Review from '../../../components/Review'
import Modal from '../../../modal/Modal'
import Login from '../../../components/Login'


const fetchBlogById = async (id) => {


  try {
    await connectMongoDB();
    // Extract the actual ObjectId string from the object
    console.log("Id new ", id);
    const objectId = id; // Access the correct property
    const blog = await Blog.findById(objectId).maxTimeMS(30000);
    // console.log(blog);

    if (!blog) {
      throw new Error("Product not found");
    }

    return blog;

  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};



export default async function Page({ params }) {



  const blogId = params.slug;
  // console.log(params);
// let flag = login();
// console.log(flag);
  try {
    const blog = await fetchBlogById(blogId);

    if (!blog) {
      // Handle missing product (e.g., redirect to not found page)
      return (
        <div>
          <h2>blog not found</h2>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.name_image}>
       
           <Image src='/author.webp' alt="author_image" width={40} height={40} className={styles.author_image }></Image>
          <h3 className={styles.author_title}>Author : {blog.author}</h3>
          
       
        <Login id={blogId} blog={blog} isUpdate={true}  operation="Update"></Login>
       
       
       
          
        </div>
        <hr className="hr" />
        <div className={styles.content}>
         {blog.content}

         <Review></Review>
        </div>

     
      </div>
    );
  } catch (error) {
    console.error("Error rendering product details:", error);
    // Consider displaying an error message to the user.
    return (
      <div>
        <h2>An error occurred</h2>
      </div>
    );
  }
}
