import { useContext } from 'react';
import Income from './Income';
import AddIncome from './AddIncome';
import { GlobalContext } from '../../context/GlobalState';


function IncomeList() {
  const {income} = useContext(GlobalContext);
  
  return (
    <div>
      <h1 className="cardHeading">Total Income</h1>
      <hr />
      {income.map(item => (<Income item={item} />) )}
      <AddIncome />
    </div>
  )
}


export default IncomeList;
