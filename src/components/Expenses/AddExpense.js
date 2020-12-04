import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function AddExpense(props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmit(event) {
    event.preventDefault();

    const newExpense = {
      id: uuid(),
      expenseDescription: description,
      expenseAmount: amount,
    };
    props.addExpense(newExpense);
  }

  return (
    <div>
      <h2 className="addHeading">Add New Expense</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="formComponent">
          <label>Expense Description</label>
          <input
            className="expenseInput"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Add Description"
          />
        </div>
        <div className="formComponent">
          <label>Expense Amount</label>
          <input
            className="expenseInput"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type="number"
            placeholder="Add Expense Amount"
          />
        </div>
        <button type="submit" className="btnExpense">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpense;
