import Income from "./Income";

function IncomeList(props) {
  console.log(props.totalIncome);
  return (
    <div>
      {props.totalIncome.map((item) => (
        <Income deleteIncome={props.deleteIncome} key={item.id} item={item} />
      ))}
    </div>
  );
}

export default IncomeList;
