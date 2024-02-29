
"use client"
import React, { useState } from 'react';



import styles from './contact.module.css'





const ContactForm = () => {
   const [name , setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

    const handleSubmit = async () => {

      
        try {
        
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
    
          var raw = JSON.stringify({
            name: name,
            email: email,
            message: message,
          });
    
          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
    
          const response = await fetch(
            "http://localhost:3000/api/contact",
            requestOptions
          );
    
        setEmail("");
        setMessage("")
        setName("");
    
          alert("Message sent");
        } catch (error) {
          console.log("Error : ", error);
        }
      };
  

    return (
        <form className={styles.formStyles} onSubmit={()=>handleSubmit()}>
          <h1 className={styles.title}>Share your Thoughts🤔</h1>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} />
           

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
           

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"  onChange={(e) => setMessage(e.target.value)} />
           
            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
