import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Prevention from "./pages/Prevention";
import Overview from "./pages/Overview";
import Graph from "./pages/Graph";
import Nav from "./Nav";
import Footer from "./Footer";
import Symptom from "./pages/Symptom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/overview" component={Overview} />
          <Route path="/symptom" component={Symptom} />
          <Route path="/prevention" component={Prevention} />
          <Route path="/graph" component={Graph} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
