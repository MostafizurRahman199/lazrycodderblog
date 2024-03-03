// Blogmodal.js
"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Blogmodal = ({
  onClose,
  onSave,
  titlee,
  authorr,
  contentt,
  operation,
  id,
  isUpdate,
  
}) => {
  const [title, setTitle] = useState(titlee || "");
  const [content, setContent] = useState(contentt || "");
  const [author, setAuthor] = useState(authorr || "");

  const putblogApi = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        id: id,
        title: title,
        content: content,
        author: author,
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch("/api/addblog", requestOptions);
      console.log(response);
      alert("blog Updated");
    } catch (error) {
      console.log("Error : ", error);
    }
  };



  const handleSave = (e) => {
    e.preventDefault();

   
      putblogApi();
    
    onSave({ title, content, author });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{isUpdate ? "Update blog" : "Add blog"}</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input-field"
        />

        <label htmlFor="content">Content:</label>
        <textarea
          rows={10}
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea-field"
        />

        <div className="modal-buttons">
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogmodal;
