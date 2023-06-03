import React from "react";

import classes from "./SearchPopup.module.css";

const SearchPopup = () => {
  return (
    <div className={classes.backgrod}>
      <div className={classes.container}>
        <h3>Search</h3>
        <p>Destination</p>
        <input type="text" />
        <p>Check - in Date</p>
        <input />
        <p>Options</p>
        <div>
          <div className={classes.layoutmini}>
            <span>Min price per night</span>
            <input />
          </div>
          <div className={classes.layoutmini}>
            <span>Max price per night</span>
            <input />
          </div>
          <div className={classes.layoutmini}>
            <span>Adult</span>
            <input type="number" />
          </div>
          <div className={classes.layoutmini}>
            <span>Children</span>
            <input type="number" />
          </div>
          <div className={classes.layoutmini}>
            <span>Room</span>
            <input type="number" />
          </div>
        </div>
        <button className={classes.btn}>Search</button>
      </div>
    </div>
  );
};

export default SearchPopup;
