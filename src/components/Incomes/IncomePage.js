import React, { useEffect } from "react";
import IncomeList from "./IncomeList";
import AddIncome from "./AddIncome";
import { v4 as uuid } from "uuid";

function IncomePage() {
  function usePersistedState(key, defaultValue) {
    const [state, setState] = React.useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }
  const [totalIncome, setTotalIncome] = usePersistedState(1, [
    {
      id: uuid(),
      incomeDescription: "Designer",
      incomeAmount: 500,
    },
    {
      id: uuid(),
      incomeDescription: "SEO Manager",
      incomeAmount: 300,
    },
  ]);

  function addIncome(newIncome) {
    setTotalIncome((prevValue) => {
      return [...prevValue, newIncome];
    });
  }

  function deleteIncome(id) {
    setTotalIncome((prevIncome) => {
      return prevIncome.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div>
      <h1 className="cardHeading">Total Income</h1>
      <hr />
      <IncomeList deleteIncome={deleteIncome} totalIncome={totalIncome} />
      <AddIncome addIncome={addIncome} />
    </div>
  );
}

export default IncomePage;
