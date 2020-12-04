import React from "react";

function Expense(props) {
  return (
    <div className="itemGroup">
      <div className="itemExpense">
        <p className="description"> {props.item.expenseDescription} </p>
        <p className="value"> {props.item.expenseAmount}</p>
      </div>
    </div>
  );
}

export default Expense;
