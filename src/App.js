import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IncomePage from "./components/Incomes/IncomePage";
import ExpensePage from "./components/Expenses/ExpensePage";
import BudgetPage from "./components/Budget/BudgetPage";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Menu />
          <Route exact path="/" component={IncomePage} />
          <Route path="/expenses" component={ExpensePage} />
          <Route path="/budget" component={BudgetPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
