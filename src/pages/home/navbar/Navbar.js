import React from "react";
import Card from "../../../Ui/Card";

import classes from "./Navbar.module.css";

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
      </Card>
    </div>
  );
};

export default Navbar;
