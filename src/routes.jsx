import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Pages/home";
import Login from "./components/Pages/login";
import SignUp from "./components/Pages/signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signUp" />
    </BrowserRouter>
  );
};

export default Routes;
