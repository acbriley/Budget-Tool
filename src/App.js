import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IncomePage from "./components/Incomes/IncomePage";
import ExpensePage from "./components/Expenses/ExpensePage";
import Budget from "./components/Budget/Budget";
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
          <Route exact path="/expenses" component={ExpensePage} />
          <Route exact path="/budget" component={Budget} />
        </div>
      </div>
    </Router>
  );
}

export default App;
