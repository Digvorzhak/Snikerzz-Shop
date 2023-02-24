import React from "react";

const NewProduct = () => {
  return (
    <>
      <h1>New Product</h1>
      <form>
        <label>Brand</label>
        <input name="brand"></input>
        <label>Name</label>
        <input name="name"></input>
        <label>Price</label>
        <input name="price"></input>
        <label>Image</label>
        <input name="image"></input>
        <button>Add New Shoe</button>
      </form>
    </>
  );
};

export default NewProduct;
