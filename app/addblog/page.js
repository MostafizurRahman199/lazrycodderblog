"use client"
import React, { useState } from 'react';
import styles from './addblog.module.css';

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");


  const handleSubmit = async () => {

      
    try {
    
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        title: title,
        content: content,
        author: author,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:3000/api/addblog",
        requestOptions
      );

 setTitle("");
 setAuthor("");
 setContent("");
 
      // alert("Message sent");
    } catch (error) {
      console.log("Error : ", error);
    }
  };


  return (
    <form className={styles.container} onSubmit={()=>handleSubmit()}>
      <h1 className={styles.title}>Write your blog</h1>
      <input 
        className={styles.inputField} 
        placeholder='Title' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        className={styles.inputField} 
        placeholder='Author name' 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <textarea 
        className={styles.textareaField} 
        placeholder='Content' 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
      />
      <button className={styles.submitButton} type='submit' >Submit</button>
 
    </form>
  );
}

