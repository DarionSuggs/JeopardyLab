import "./App.css";
import { createBrowserHistory } from "history";
import React from "react";
// import { Route, Switch } from "react-router-dom"
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";
import { Route, Switch, Router } from "react-router-dom";

const history = createBrowserHistory();


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navigation />
        <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} component={Welcome} />}
        />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/jeopardy" component={Jeopardy} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
