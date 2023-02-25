import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <>
      <h1>Snikerzz Social Club</h1>
      <img className={classes.landing} src="https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4187.jpg"></img>
    </>
  );
};

export default HomePage;
