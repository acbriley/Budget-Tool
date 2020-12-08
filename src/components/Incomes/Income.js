import React from "react";

function Income(props) {
  console.log(props);
  return (
    <div className="itemGroup">
      <button
        className="deleteBtn"
        onClick={() => {
          console.log(props.item.id);
          props.deleteIncome(props.item.id);
        }}
      >
        <span
          className="iconify"
          data-icon="mdi:delete"
          data-inline="false"
        ></span>
      </button>
      <div className="item">
        <p className="description"> {props.item.incomeDescription} </p>
        <p className="value"> {props.item.incomeAmount}</p>
      </div>
    </div>
  );
}

export default Income;
