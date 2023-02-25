import React, { useState } from "react";
import classes from "./NewProduct.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const NewProduct = () => {
  const [shoe, setShoe] = useState({ brand: "", title: "", retailPrice: "", mediaImg: "" });

  const handleSubmit = async (event) => {
    console.log(shoe);
    event.preventDefault();
    try {
      const response = await axios.post("https://63f8d7e35b0e4a127def64be.mockapi.io/shoes", shoe);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setShoe({ ...shoe, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>New Product</h1>
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <label>Brand</label>
          <input onChange={handleChange} value={shoe.brand} name="brand"></input>
          <label>Name</label>
          <input onChange={handleChange} value={shoe.title} name="title"></input>
          <label>Price</label>
          <input onChange={handleChange} value={shoe.retailPrice} name="retailPrice"></input>
          <label>Image</label>
          <input onChange={handleChange} value={shoe.mediaImg} name="mediaImg"></input>
          {/* <Link to="/products"> */}
          <button className={classes.btn}>Add New Shoe</button>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
};

export default NewProduct;
