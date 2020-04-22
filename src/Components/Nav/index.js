import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { menuItems } from "../../Utils/nav";

const rotas = menuItems.map(({ name, comp, subMenus }, i) => {
  return <Route exact path={"/Main/" + name} component={comp} key={i} />;
});

const subRotas = menuItems.map(({ name, comp, subMenus }, i) => {
  var subnome = name;
  return subMenus.map(({ name, comp }, j) => {
    return (
      <Route
        exact
        path={"/Main/" + subnome + "/" + name}
        component={comp}
        key={j}
      />
    );
  });
});

const Nav = () => {
  let location = useLocation();
  return (
    <SwitchTransition>
      {/*
    This is no different than other usage of
    <CSSTransition>, just make sure to pass
    `location` to `Switch` so it can match
    the old location as it animates out.
  */}
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          {rotas}
          {subRotas}
        </Switch>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Nav;
