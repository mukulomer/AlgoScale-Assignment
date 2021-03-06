import React from "react";
import "./styles.css";
import Signin from "./components/Login";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import { Redirect, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Signin} />
        <Route exact path="/" component={Home} />
        <Route path="/analytics" component={Analytics} />
      </Switch>
    </div>
  );
}
