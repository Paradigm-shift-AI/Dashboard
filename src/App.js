import React from "react";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import Admin from "./Admin";
import Lectures from "./Lectures";
import Plugins from "./Plugins";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Lato',
      fontSize: 14,
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/lectures/:course/:date" component={(props) => <Lectures {...props} />}/>
        <Route path="/plugins/:course" component={(props) => <Plugins {...props} />}/>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
