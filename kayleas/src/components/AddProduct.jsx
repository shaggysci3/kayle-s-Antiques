

// import { Button } from 'react-bootstrap';

import React, { useState, useEffect } from "react";


const AddProduct = ({setShow}) => {
  // states
  
  const [formData,setFormData] = useState({
    img:"",
    name:"",
    price:"",
    info:"",
  });
  
  // post request to post new user and form funtions
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      img:formData.img,
      name: formData.name,
      price: formData.price,
      info: formData.info
    }
    try {
      const response = await fetch("https://birds-ub6e.onrender.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
  
      if (!response.ok) {
        // Handle the case where the server returns an error status
        console.error(`Failed to add product. Status: ${response.status}`);
        alert("fill all text feilds before submitting")
        return;
      }
  
      // If the request is successful, you can handle the response if needed
      const addedProduct = await response.json();
      console.log("Product added:", addedProduct);
      alert("your product has been added to the shop")
      // show form again on page
      // setShow(false)
  
      // Clear the form after successful submission
      setFormData({
        img: "",
        name: "",
        price: "",
        info: "",
      });
  
      // You may want to update your user list or perform other actions here
    } catch (error) {
      console.error("Error adding user:", error);
      alert("fill all text feilds before submitting")
    }
    

  }
  function handleClick(){
    setShow(false)
  }

  return (
    <>
    <div onClick={handleClick} className="closeButton" style={{left:"317px",top:"16px"}}>X</div>
    <form className="productForm" onSubmit={handleSubmit}>
        <div className='verticalContainer'>

      <div className="formItem">
        <label>Product Name:</label>
        <input
        type='text'
        id='name'
        value={formData.name}
        onChange={handleChange}/>
      </div>
      <div className="formItem">
        <label>Product Price:</label>
        <input
        type='text'
        id='price'
        value={formData.price}
        onChange={handleChange}/>
      </div>
      <div>
        <label>Img</label>
        <input
        type='text'
        id='img'
        value={formData.img}
        onChange={handleChange}/>
      </div>
      <div>
      <img className='ProductImg-S' src = {formData.local_avatars?`${formData.local_avatars}`:'https://www.bing.com/th?id=OUG.55A6FB57C09AFA5981B1EEE251E740F4&w=236&c=11&rs=1&qlt=90&bgcl=ececec&o=6&pid=PersonalBing&p=0'}></img>
      </div>
      <div className="formItem">
        <label>Product info:</label>
        <input
        type='text'
        id='info'
        value={formData.info}
        onChange={handleChange}/>
      </div>
      <button type="submit">Add</button>
        </div>
    </form>
    </>
  )
}

export default AddProduct