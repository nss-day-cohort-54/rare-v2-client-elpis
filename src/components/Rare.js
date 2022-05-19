import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const Rare = () => {
  const [token, setTokenState] = useState();

  const setToken = (data) => {
    localStorage.setItem('lu_token', data.token)
    localStorage.setItem('is_admin', data.is_admin)
    setTokenState(data.token)
  }

  return (
    <>
      {token ? (
        <Route>
          <NavBar token={token} setToken={setToken} />
          <ApplicationViews />
        </Route>
      ) : (
        <Redirect to="/login" />
      )}

      <Route exact path="/login">
        <NavBar token={token} setToken={setToken} />
        <Login token={token} setToken={setToken} />
      </Route>

      <Route path="/register" exact>
        <NavBar token={token} setToken={setToken} />
        <Register token={token} setToken={setToken} />
      </Route>
    </>
  );
};
