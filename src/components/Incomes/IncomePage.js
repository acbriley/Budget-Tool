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
      <IncomeList totalIncome={totalIncome} />
      <AddIncome addIncome={addIncome} />
    </div>
  );
}

export default IncomePage;
