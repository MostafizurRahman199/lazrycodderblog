"use client";
import React, { useState } from "react";
import styles from "./review.module.css";

export default function Review() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: name,
        review: review,
        rating: rating,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:3000/api/review",
        requestOptions
      );
      
      setName("");
      setRating("");
      setReview("");
      
    //   alert("Review sent");
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <div className={styles.reviews_section}>
      <h1>Give a Review</h1>
      <input
        className={styles.review_name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <textarea
        className={styles.reviews_details}
        placeholder="Review Details..."
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <input
        className={styles.ratings}
        placeholder="Give rating 1-5"
        onChange={(e) => setRating(e.target.value)}
      ></input>
      <button className={styles.review_button} onClick={()=>handleSubmit()}>Submit</button>
    </div>
  );
}
