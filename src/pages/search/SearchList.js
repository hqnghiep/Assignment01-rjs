import React from "react";

import classes from "./SearchList.module.css";

const SearchList = ({ lists }) => {
  return (
    <div className={classes.container}>
      {lists.map((lis) => (
        <div key={lis.name} className={classes.borders}>
          <div className={classes.layout}>
            <img src={lis.image_url} alt="" />
            <di className={classes.title}>
              <h3>{lis.name}</h3>
              <p>{lis.distance} from center</p>
              <button>{lis.tag}</button>
              <h4>{lis.description}</h4>
              <p>{lis.type}</p>
              {lis.free_cancel && (
                <div className={classes.cancel}>
                  <h4>Free cancellation</h4>
                  <p>
                    You can cancel later, so lock in this great price tiday!
                  </p>
                </div>
              )}
            </di>
            <div className={classes.layoutmini}>
              <div className={classes.excel}>
                <p>{lis.rate_text}</p>
                <button>{lis.rate}</button>
              </div>
              <div className={classes.seeavai}>
                <h2>${lis.price}</h2>
                <p>Includes taxes and fees</p>
                <button>See availability</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
