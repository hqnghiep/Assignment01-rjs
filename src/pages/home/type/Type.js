import React from "react";
import Card from "../../../Ui/Card";
import classes from "./Type.module.css";

const TYPE_DUMMY = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const Type = () => {
  return (
    <Card className={classes.title}>
      <h3>Browse by property type</h3>
      <div className={classes.container}>
        {TYPE_DUMMY.map((type) => (
          <div key={type.name}>
            <img src={type.image} alt="" />
            <div>
              <h3>{type.name}</h3>
              <p>{type.count} Hotels</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Type;
