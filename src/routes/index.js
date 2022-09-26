// import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
// import { useToast, Flex, Box } from "@chakra-ui/react";
import HomePage from "../pages/Home";
import { useState, useEffect } from "react";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("agenda:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <LoginPage
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route exact path="/home">
        <HomePage
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route path="/register">
        <RegisterPage authenticated={authenticated} />
      </Route>
    </Switch>
  );
};
export default Routes;
