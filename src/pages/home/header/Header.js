import React from "react";

import Card from "../../../Ui/Card";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.background}>
      <Card>
        <div className={classes.container}>
          <h1>A Iifrtime of discounts? It's Genius.</h1>
          <p>
            Get rewarded for your travels - unlock instant saving of 10% or more
            with a free account
          </p>
          <button>Sign in/ Register</button>
        </div>
        <div className={classes.input}>
          <label className={classes.mrl}>
            <FontAwesomeIcon icon={faBed} />{" "}
            <input type="text" placeholder="Where you are going?" />
          </label>
          <label>
            <FontAwesomeIcon icon={faCalendarDays} /> <input type="date" />
          </label>
          <label>
            <FontAwesomeIcon icon={faPerson} />{" "}
            <input placeholder="1 adult • 0 children • 1 room" />{" "}
          </label>
          <button onClick={() => navigate("/search")}>Search</button>
        </div>
      </Card>
    </div>
  );
};

export default Header;
