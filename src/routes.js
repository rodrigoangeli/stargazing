import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Analytics from "./Components/Nav/Analytics";
import Conversa from "./Components/Nav/Conversa";
import Dashboard from "./Components/Nav/Dashboard";
import Escutando from "./Components/Nav/Escutando";
import Publicacoes from "./Components/Nav/Publicações";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Main" component={Main} />
      <Route path="/Main/Dashboard" component={Dashboard} />
      <Route path="/Main/Analytics" component={Analytics} />
      <Route path="/Main/Publicacoes" component={Publicacoes} />
      <Route path="/Main/Conversa" component={Conversa} />
      <Route path="/Main/Escutando" component={Escutando} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
