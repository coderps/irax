import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import HomePage from "./homepage";
import About from "./about/about";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
