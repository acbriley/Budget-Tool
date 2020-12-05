import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import { v4 as uuid } from "uuid";

function ExpensePage() {
  const [totalExpenses, setTotalExpenses] = useState([
    {
      id: uuid(),
      expenseDescription: "Rent",
      expenseAmount: 500,
    },
  ]);

  function addExpense(newExpense) {
    setTotalExpenses((prevValue) => {
      return [...prevValue, newExpense];
    });
  }

  return (
    <div>
      <h1 className="cardHeading">Total Expenses</h1>
      <hr />
      <ExpenseList totalExpenses={totalExpenses} />
      <AddExpense addExpense={addExpense} />
    </div>
  );
}

export default ExpensePage;
