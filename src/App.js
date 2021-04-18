import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Issues from "./components/issues";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/github-issues/">Github Issues</Link>
        </header>
        <Switch>
          <Route exact path="/:page?">
            <Issues />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
