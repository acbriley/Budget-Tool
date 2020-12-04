import Expense from "./Expense";

function ExpenseList(props) {
  return (
    <div>
      {props.totalExpenses.map((item) => (
        <Expense item={item} />
      ))}
    </div>
  );
}

export default ExpenseList;
