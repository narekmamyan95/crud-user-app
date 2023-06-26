import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/auth/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handlePost(e) {
    e.preventDefault();
    dispatch(logIn({ userName, password }));
    setUserName("");
    setPassword("");
  }

  return (
    <div className="loginPageContainer">
      <h1>Create Account</h1>
      <form method="POST" onSubmit={handlePost}>
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          required
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
