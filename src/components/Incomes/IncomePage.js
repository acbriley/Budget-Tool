import React, { useState } from "react";
import IncomeList from "./IncomeList";
import AddIncome from "./AddIncome";
import { v4 as uuid } from "uuid";

function IncomePage() {
  const [totalIncome, setTotalIncome] = useState([
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

  console.log(totalIncome);

  function addIncome(newIncome) {
    setTotalIncome((prevValue) => {
      return [...prevValue, newIncome];
    });
  }

  return (
    <div>
      <h1 className="cardHeading">Total Income</h1>
      <hr />
      <IncomeList totalIncome={totalIncome} />
      <AddIncome addIncome={addIncome} />
    </div>
  );
}

export default IncomePage;
