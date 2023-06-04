import React, { useEffect, useState } from "react";

import Card from "../../../Ui/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { addDays, format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import classes from "./Header.module.css";
import "./DateRange.css";

const Header = () => {
  const navigate = useNavigate();
  const [showDate, setShowDate] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 5),
      key: "selection",
    },
  ]);

  console.log(range[0].startDate);
  // ẩn ,hiện lịch khi 'click'
  const isShowHandle = () => {
    setShowDate(!showDate);
  };
  //ẩn lịch khi nhấn phím 'Esc'
  const escKeyHandle = (e) => {
    if (e.key === "Escape") {
      setShowDate(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", escKeyHandle, true);
  }, []);

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
        <div className={classes.posisions}>
          <div className={classes.input}>
            <label className={classes.mrl}>
              <FontAwesomeIcon icon={faBed} />
              <input type="text" placeholder="Where you are going?" />
            </label>

            <label>
              <FontAwesomeIcon icon={faCalendarDays} />
              <input
                onClick={isShowHandle}
                readOnly
                id={classes.inputDate}
                value={`${format(range[0].startDate, "dd-MM-yyyy")} to ${format(
                  range[0].endDate,
                  "dd-MM-yyyy"
                )}`}
              />
            </label>

            <label>
              <FontAwesomeIcon icon={faPerson} />
              <input placeholder="1 adult • 0 children • 1 room" />
            </label>
            <button onClick={() => navigate("/search")}>Search</button>
          </div>
          <div className={classes.range}>
            {showDate && (
              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                // months={2}
                direction="horizontal"
              />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Header;
