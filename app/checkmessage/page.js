import Link from 'next/link'
import React from 'react'
import messageModel from '../../models//contact'
import { connectMongoDB } from '../../lib/db'
import Image from 'next/image'
import styles from './checkmessage.module.css'


await connectMongoDB()
const fetchMessage = async ()=>{
    try {
      const data = await messageModel.find().maxTimeMS(30000); // 30 seconds
      
      return data;
    } catch (error) {
      console.log("Error : ", error);
    }
}


export default async function checkmessage() {
  const messages = await fetchMessage();
  return (
    <div className={styles.message_page}>
    <h1 className={styles.message_portal}>All Message</h1>
   

      {
        messages?.map((message)=>{
          return (
            <div className={styles.message_item} key={message._id}>
                <div  className={styles.message_item2} >
                <Image alt='' className={styles.message_image} width={40} height={40} src='/author.webp'></Image>
            <h3 className={styles.message_name}>{message.name}</h3>
            <h3 className={styles.message_email}>{message.email}</h3>
                </div>
          
            {/* <h3 className="blog_title">Author : {blog.author}</h3> */}
              <p className={styles.message}>{message.message}</p>
            </div>
          )
        })
      }
   
    
  
    
  </div>
  )
}
