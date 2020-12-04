import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function AddIncome(props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmit(event) {
    event.preventDefault();

    const newIncome = {
      id: uuid(),
      incomeDescription: description,
      incomeAmount: amount,
    };
    props.addIncome(newIncome);
  }

  return (
    <div>
      <h2 className="addHeading">Add New Income</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="formComponent">
          <label>Income Description</label>
          <input
            className="incomeInput"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Add Description"
          />
        </div>
        <div className="formComponent">
          <label>Income Amount</label>
          <input
            className="incomeInput"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type="number"
            placeholder="Add Income Amount"
          />
        </div>
        <button type="submit" className="btn">
          Add Income
        </button>
      </form>
    </div>
  );
}

export default AddIncome;
