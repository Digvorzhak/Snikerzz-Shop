import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Products.module.css";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://63f8d7e35b0e4a127def64be.mockapi.io/shoes");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.products}>
      {data.map((sneaker) => (
        <div className={classes.item}>
          <h3 key={sneaker.id}>
            {sneaker.brand} {sneaker.title}
          </h3>
          <h4>Price: {sneaker.retailPrice}$</h4>
          <img className={classes.img} src={sneaker.media.smallImageUrl}></img>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
