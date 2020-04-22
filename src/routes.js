import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import { menuItems } from "./Utils/nav";

const rotas = menuItems.map(({ name, comp, subMenus }, i) => {
  return (
    <Route exact path={"/Main/" + name} key={i}>
      <Main>{comp}</Main>
    </Route>
  );
});

const subRotas = menuItems.map(({ name, comp, subMenus }, i) => {
  var subnome = name;
  return subMenus.map(({ name, comp }, j) => {
    return (
      <Route exact path={"/Main/" + subnome + "/" + name} key={j}>
        <Main>{comp}</Main>
      </Route>
    );
  });
});

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Main/Dashboard" component={Main} />
      {rotas}
      {subRotas}
    </Switch>
  </BrowserRouter>
);
export default Routes;
