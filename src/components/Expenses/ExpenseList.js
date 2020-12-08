import Expense from "./Expense";

function ExpenseList(props) {
  return (
    <div>
      {props.totalExpenses.map((item) => (
        <Expense
          deleteExpense={props.deleteExpense}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
