import Income from "./Income";

function IncomeList(props) {
  console.log(props);
  return (
    <div>
      <h1 className="cardHeading">Total Income</h1>
      <hr />
      {props.totalIncome.map((item) => (
        <Income item={item} />
      ))}
    </div>
  );
}

export default IncomeList;
