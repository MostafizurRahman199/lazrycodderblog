"use client";
import React, { useEffect, useState } from "react";
import styles from "./review.module.css";

// export default function page() {
//   const [name, setName] = useState("");
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState("");
//   const [submitDisabled, setSubmitDisabled] = useState(false); // State for button disabling
//   const [isSubmitted, setIsSubmitted] = useState(false); // State for button disabling

//   //step : 1
//   // useEffect(() => {
//   //   setName("");
//   //   setRating("");
//   //   setReview("");
//   //   // Reset submitted flag after clearing form
//   // }, [isSubmitted]);

//   const handleSubmit = async () => {
//     try {
//       setSubmitDisabled(true); // Disable button to prevent multiple submissions

//       var myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");

//       var raw = JSON.stringify({
//         name,
//         review,
//         rating,
//       });

//       var requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow",
//       };

//       const response = await fetch(
//         "http://localhost:3000/api/review",
//         requestOptions
//       );

//       //step : 1
//       // if (response.ok) {
//       //   setIsSubmitted(true);
//       // }

//       //step : 2
//       // setName("");
//       // setReview("");
//       // setRating("");
//       // alert("Review sent!");

//       //step : 3
//       if (response.ok) {
//         setName("");
//         setRating("");
//         setReview("");
//         alert('Review sent!');
//       } else {
//         alert('Error sending review. Please try again.');
//       }

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error sending review. Please try again.");
//     } finally {
//       setSubmitDisabled(false); // Re-enable button after request completes
//     }
//   };

//   return (
//     <form className={styles.reviews_section} onSubmit={() => handleSubmit()}>
//       <h1>Give a Review</h1>
//       <input
//         className={styles.review_name}
//         placeholder="name"
//         value={name} // Set value for controlled input
//         onChange={(e) => setName(e.target.value)}
//       />
//       <textarea
//         className={styles.reviews_details}
//         placeholder="Review Details..."
//         value={review} // Set value for controlled input
//         onChange={(e) => setReview(e.target.value)}
//       />
//       <input
//         className={styles.ratings}
//         placeholder="Give rating 1-5"
//         value={rating} // Set value for controlled input
//         onChange={(e) => setRating(e.target.value)}
//       />
//       <button
//         className={styles.review_button}
//         type="submit"
//         disabled={submitDisabled}
//       >
//         Submit
//       </button>
//     </form>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import styles from "./review.module.css";

export default function page() { // Renamed for clarity

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // State for success message


  //step : 1
  
  useEffect(() => {
    if (isSubmitted) { // Clear form fields only after successful submission
      setName("");
      setReview("");
      setRating("");
      setIsSubmitted(false); // Reset submitted flag for next submission
    }
  }, [isSubmitted]);

  const handleSubmit = async () => {
    try {
      setSubmitDisabled(true); // Disable button to prevent multiple submissions

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name,
        review,
        rating,
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

//step : 1
      if (response.ok) {
        setIsSubmitted(true); // Set submitted flag for success message
        alert("Review sent!");
      } else {
        alert("Error sending review. Please try again.");
      }

//step : 2

if(response.ok){
  setName("");
  setRating("");
  setReview("");
}

    } catch (error) {
      console.error("Error:", error);
      alert("Error sending review. Please try again.");
    } finally {
      setSubmitDisabled(false); // Re-enable button after request completes
    }
  };

  return (
    <form className={styles.reviews_section} onSubmit={handleSubmit}>
      <h1>Give a Review</h1>
      <input
        className={styles.review_name}
        placeholder="name"
        value={name} // Set value for controlled input
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className={styles.reviews_details}
        placeholder="Review Details..."
        value={review} // Set value for controlled input
        onChange={(e) => setReview(e.target.value)}
      />
      <input
        className={styles.ratings}
        placeholder="Give rating 1-5"
        value={rating} // Set value for controlled input
        onChange={(e) => setRating(e.target.value)}
      />
      <button
        className={styles.review_button}
        type="submit"
        disabled={submitDisabled}
      >
        Submit
      </button>
      {isSubmitted && <p className={styles.success_message}>
          Review submitted successfully!
        </p>}
    </form>
  );
}
