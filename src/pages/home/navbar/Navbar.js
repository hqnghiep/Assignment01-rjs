import React from "react";
import Card from "../../../Ui/Card";

import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const icons = { bed: faBed, plane: faPlane, car: faCar, taxi: faTaxi };
const nabarItems = [
  {
    type: "Stays",
    icon: icons.bed,
    active: true,
  },
  {
    type: "Flights",
    icon: icons.plane,
    active: false,
  },
  {
    type: "Car rentals",
    icon: icons.car,
    active: false,
  },
  {
    type: "Attractions",
    icon: icons.bed,
    active: false,
  },
  {
    type: "Airport taxis",
    icon: icons.taxi,
    active: false,
  },
];

const Navbar = () => {
  return (
    <div className={classes.background}>
      <Card>
        <div className={classes.layout}>
          <h3>Booking Website</h3>
          <div>
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
        <div className={classes.layoutitem}>
          {nabarItems.map((item) => (
            <div
              key={item.type}
              className={item.active ? classes.active : undefined}
            >
              <FontAwesomeIcon
                icon={item.icon}
                color="white"
                className={classes.type}
              />
              <span>{item.type}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Navbar;
