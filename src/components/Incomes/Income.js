import React from "react";

function Income(props) {
  return (
    <div className="itemGroup">
      <div className="item">
        <p className="description"> {props.item.incomeDescription} </p>
        <p className="value"> {props.item.incomeAmount}</p>
      </div>
    </div>
  );
}

export default Income;
