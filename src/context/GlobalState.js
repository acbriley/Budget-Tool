import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  income: [
    {
      key: 0,
      description: 'SEO Manager',
      amount: 200
    },
    {
      key: 1,
      description: 'Writing Gig',
      amount: 300
    },
    {
      key: 2,
      description: 'Copywriter',
      amount: 200
    },
    {
      key: 3,
      description: 'Designer',
      amount: 200
    }
  ]
}

// Create CONTEXT
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) =>{
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function addIncome(income) {
    dispatch({
      type: 'ADD_INCOME',
      payload: income
    });
  }

  function deleteIncome(id){
    dispatch({
      type: 'DELETE_INCOME',
      payload: id
    })
  }

  return(<GlobalContext.Provider value={{
    income: state.income,
    addIncome,
    deleteIncome
  }} >
    {children}
  </GlobalContext.Provider>)
}