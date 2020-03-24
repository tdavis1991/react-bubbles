import React, { useState } from "react";
import axios from 'axios';
import api from '../utils/api';
import '../styles.scss';


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const [error, setError] = useState()

  const handleSubmit = event => {
    event.preventDefault()

    api()
      .post("/api/login", user)
        .then(res => {
          localStorage.setItem("token", res.data.payload)
          console.log(res.data.payload)
          props.history.push("/bubble-page")
        }).catch(err => {
          setError(err)
        })
  }

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input-styles"
          type="text"
          name="username"
          value={user.username}
          placeholder="  Username"
          onChange={handleChange}
        />
        <input
          className="input-styles"
          type="text"
          name="password"
          value={user.password}
          placeholder="  Password"
          onChange={handleChange}
        />
        <button className="button-styles" type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
