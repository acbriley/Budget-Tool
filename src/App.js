import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import IncomeList from './components/Incomes/IncomeList';
import Expense from './components/Expenses/Expense';
import Budget from './components/Budget/Budget';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
          <div className="container">
            <Menu />
            <Route exact path="/" component={IncomeList} />
            <Route exact path="/expenses" component={Expense} />
            <Route exact path="/budget" component={Budget} /> 
          </div>
      </div>
    </Router>
  );
}

export default App;

