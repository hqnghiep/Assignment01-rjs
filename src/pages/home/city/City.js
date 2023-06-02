import React from "react";

import Card from "../../../Ui/Card";

import classes from "./City.module.css";

const CITY_DUMMY = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const City = () => {
  return (
    <Card className={classes.container}>
      {CITY_DUMMY.map((list) => (
        <div key={list.name}>
          <img src={list.image} alt="" />
          <div className={classes.text}>
            <h2>{list.name}</h2>
            <p>{list.subText}</p>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default City;
