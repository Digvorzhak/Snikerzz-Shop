import React from "react";
import classes from "./NewProduct.module.css";

const NewProduct = () => {
  return (
    <>
      <h1>New Product</h1>
      <div className={classes.container}>
        <form className={classes.form}>
          <label>Brand</label>
          <input name="brand"></input>
          <label>Name</label>
          <input name="name"></input>
          <label>Price</label>
          <input name="price"></input>
          <label>Image</label>
          <input name="image"></input>
          <button className={classes.btn}>Add New Shoe</button>
        </form>
      </div>
    </>
  );
};

export default NewProduct;
