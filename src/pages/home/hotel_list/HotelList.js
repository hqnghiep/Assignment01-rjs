import React from "react";

import Card from "../../../Ui/Card";
import classes from "./HotelList.module.css";
import { useNavigate } from "react-router";

const HOTEL_DUMMY = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const HotelList = () => {
  const navigate = useNavigate();

  return (
    <Card className={classes.container}>
      <h3>Homes guests love</h3>
      <div className={classes.layout}>
        {HOTEL_DUMMY.map((hot) => (
          <div key={hot.name}>
            <img src={hot.image_url} alt="" />
            <h3 onClick={() => navigate("/detail")}>{hot.name}</h3>
            <p>{hot.city}</p>
            <p>Starting from ${hot.price}</p>
            <p>
              <span className={classes.btn}>{hot.rate}</span> {hot.type}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HotelList;
