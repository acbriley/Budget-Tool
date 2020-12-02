const AppReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_INCOME':
      return{
        ...state,
        income: [...state.income, action.payload]
      }
      case 'DELETE_INCOME':
        return{
          ...state,
          income: state.income.filter((income) => income.id !== action.payload)
        }
    default:
      return state;
  }
}

export default AppReducer;
