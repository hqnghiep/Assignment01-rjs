import React from "react";
import classes from "./DetailList.module.css";
import Card from "../../Ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const DetailList = ({ details }) => {
  return (
    <Card className={classes.container}>
      <div className={classes.layout}>
        <h2>{details.name}</h2>
        <button>Reserve or Book Now!</button>
      </div>
      <p>
        <FontAwesomeIcon icon={faLocationDot} />
        {details.address}
      </p>
      <p id={classes.distance}>{details.distance}</p>
      <p id={classes.price}>{details.price}</p>
      <div className={classes.layoutImg}>
        {details.photos.map((item) => (
          <img key={item} src={item} alt="" />
        ))}
      </div>
      <div className={classes.layoutStay}>
        <div className={classes.titletext}>
          <h2>{details.name}</h2>
          <p>{details.description}</p>
        </div>
        <div className={classes.prefect}>
          <h3>Perfect for a 9-night stay!</h3>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <h1>
            ${details.nine_night_price} <span>(9 night)</span>
          </h1>
          <button>Reseve or Book Now!</button>
        </div>
      </div>
    </Card>
  );
};

export default DetailList;
