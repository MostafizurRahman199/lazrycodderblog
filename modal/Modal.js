// YourNextPage.js
"use client"

import React, { useState } from 'react';
import BlogModal from './Blogmodal';


const Modal = ({ id, titlee , contentt, authorr, isUpdate,  operation }) => {


// console.log(props.blog);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProduct = (productData) => {
    // Handle saving the product data
    console.log('Product Data:', productData);
  };

  let title ;
if(isUpdate){
    title = "Update"
}
else{
    title = "Delete";
}
  return (
    <div>
      <button onClick={handleOpenModal}>{title}</button>

      {isModalOpen && (
        <BlogModal titlee={titlee}  contentt ={contentt}   authorr={authorr} isUpdate={isUpdate}  operation={  operation} onClose={handleCloseModal} onSave={handleSaveProduct} id={id} />
      )}

      {/* Rest of your page content */}
    </div>
  );
};

export default Modal;
