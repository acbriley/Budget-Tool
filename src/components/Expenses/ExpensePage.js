import React, { useEffect } from "react";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import { v4 as uuid } from "uuid";

function ExpensePage() {
  function usePersistedState(key, defaultValue) {
    const [state, setState] = React.useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

  const [totalExpenses, setTotalExpenses] = usePersistedState(2, [
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
  function deleteExpense(id) {
    setTotalExpenses((prevExpense) => {
      return prevExpense.filter((item) => {
        return item.id !== id;
      });
    });
  }
  return (
    <div>
      <h1 className="cardHeading">Total Expenses</h1>
      <hr />
      <ExpenseList
        deleteExpense={deleteExpense}
        totalExpenses={totalExpenses}
      />
      <AddExpense addExpense={addExpense} />
    </div>
  );
}

export default ExpensePage;
