import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <NavLink
        exact
        activeClassName="activeStyleIncome"
        styles={linkStyles}
        to="/"
      >
        {" "}
        Income
      </NavLink>
      <NavLink
        activeClassName="activeStyleExpense"
        styles={linkStyles}
        to="/expenses"
      >
        Expenses
      </NavLink>
      <NavLink
        activeClassName="activeStyleBudget"
        styles={linkStyles}
        to="/budget"
      >
        Budget
      </NavLink>
    </div>
  );
}

const linkStyles = {
  padding: "10px",
  textDecoration: "none",
};

export default Menu;
