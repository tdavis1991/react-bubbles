import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import { getToken } from './utils/api';
import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  const signedIn = getToken();

  return (
    <Router>
      <div className="App">
        {!signedIn &&
          <div className="login-page">
            <h1>React Bubbles</h1> 
            <Route exact path="/" component={Login} />
          </div>
        }
        <ProtectedRoute exact path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default withRouter(App);
