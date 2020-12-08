import React from "react";

function Expense(props) {
  return (
    <div className="itemGroup">
      <button
        className="deleteBtn"
        onClick={() => {
          console.log(props.item.id);
          props.deleteExpense(props.item.id);
        }}
      >
        <span
          className="iconify"
          data-icon="mdi:delete"
          data-inline="false"
        ></span>
      </button>
      <div className="itemExpense">
        <p className="description"> {props.item.expenseDescription} </p>
        <p className="value"> {props.item.expenseAmount}</p>
      </div>
    </div>
  );
}

export default Expense;
