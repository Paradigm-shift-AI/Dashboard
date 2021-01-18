import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import Classa from "./components/ClassImprove"
import Admin from "./Admin";
import Lectures from "./Lectures";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/lectures">
          <Lectures />
        </Route>
        <Route path="/">
          <Classa />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
