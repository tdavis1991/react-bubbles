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
        {!signedIn && <Route exact path="/" component={Login} />}
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        {signedIn && <Link to="/bubble-page">Bubble Page</Link>}
        <ProtectedRoute exact path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default withRouter(App);
