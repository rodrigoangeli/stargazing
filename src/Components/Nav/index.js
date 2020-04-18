import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Analytics from "./Analytics";
import Publicações from "./Publicações";
import Conversa from "./Conversa";
import Escutando from "./Escutando";

const Nav = () => (
  <Switch>
    <Route exact path="/Main/Dashboard">
      <Dashboard />
    </Route>
    <Route path="/Main/Analytics">
      <Analytics />
    </Route>
    <Route path="/Main/Publicações">
      <Publicações />
    </Route>
    <Route path="/Main/Conversa">
      <Conversa />
    </Route>
    <Route path="/Main/Escutando">
      <Escutando />
    </Route>
  </Switch>
);

export default Nav;
