import React, { useContext, useState } from 'react'
import {GlobalContext} from '../../context/GlobalState';

function AddIncome() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const { addIncome }  = useContext(GlobalContext);



  function onSubmit (event) {

    event.preventDefault();

    const newIncome= {
      id: 4,
      description,
      amount
    }
    addIncome(newIncome)
  }

  return (
    <div>
      <h2 className="addHeading">Add New Income</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="formComponent">
          <label>Income Description</label>
          <input value={description} onChange={(event) => setDescription(event.target.value)}
            type='text' placeholder="Add Description"
          />
        </div>
        <div className="formComponent">
          <label >Income Amount</label> 
          <input value={amount} onChange={(event) => setAmount(event.target.value)}
            type="number" placeholder="Add Income Amount"
          />
        </div>
        <button type="submit" className="btn">Add Income</button>
      </form>
    </div>
  )
}

export default AddIncome;
