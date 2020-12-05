import Income from "./Income";

function IncomeList(props) {
  console.log(props);
  return (
    <div>
      {props.totalIncome.map((item) => (
        <Income item={item} />
      ))}
    </div>
  );
}

export default IncomeList;
