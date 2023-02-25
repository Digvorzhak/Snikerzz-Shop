import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import classes from "./EditProduct.module.css";

const EditProduct = () => {
  const [shoe, setShoe] = useState({ brand: "", title: "", retailPrice: "", mediaImg: "" });
  const { id } = useParams();

  useEffect(() => {
    loadShoe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://63f8d7e35b0e4a127def64be.mockapi.io/shoes/${id}`, shoe);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    console.log(id);
    await axios.delete(`https://63f8d7e35b0e4a127def64be.mockapi.io/shoes/${id}`);
  };

  const loadShoe = async () => {
    const result = await axios.get(`https://63f8d7e35b0e4a127def64be.mockapi.io/shoes/${id}`);
    setShoe(result.data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      setShoe({ ...shoe, mediaImg: value });
    } else {
      setShoe({ ...shoe, [name]: value });
    }
  };

  return (
    <>
      <h1>Edit Product</h1>
      <div className={classes.container}>
        <form onClick={handleSubmit} className={classes.form}>
          <label>Brand</label>
          <input onChange={handleChange} value={shoe.brand} name="brand"></input>
          <label>Name</label>
          <input onChange={handleChange} value={shoe.title} name="title"></input>
          <label>Price</label>
          <input onChange={handleChange} value={shoe.retailPrice} name="retailPrice"></input>
          <label>Image</label>
          <input onChange={handleChange} value={shoe.mediaImg} name="image"></input>
          <Link to="/products">
            <button className={classes.btn}>Edit Shoe</button>
          </Link>
        </form>
      </div>
      <Link to="/products">
        <button onClick={handleDelete} className={classes.btn}>
          Delete Shoe
        </button>
      </Link>
    </>
  );
};

export default EditProduct;
