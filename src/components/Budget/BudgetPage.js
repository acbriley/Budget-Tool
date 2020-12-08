import React from "react";
import DoughnutChart from "./BudgetChart";

function BudgetPage() {
  return (
    <div>
      <h1 className="cardHeading">Budget</h1>
      <hr />
      <DoughnutChart />
    </div>
  );
}

export default BudgetPage;
