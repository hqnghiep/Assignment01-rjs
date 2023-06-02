import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.container}>
      <h1>Save time, save money</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Form;
