import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/auth/actions";
import { Link } from "react-router-dom";
import { routes } from "../../constants";
import { get } from "../../utils/storage";
const AppHeader = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };

  const storageUsername = get("user")?.userName;

  return (
    <header
    >
      <div style={{ width: "30%" }}>
        <h3>
          <Link to={routes.HOME}>My First App</Link>
        </h3>
      </div>
      <div className="headerUser" >
        <p>User</p>
        <label>{storageUsername}</label>
      </div>
      <div className="headernavigate" >
        <Link to={routes.ABOUT}>About</Link>
        <Link to={routes.CREATE_USER}>Create User</Link>
        <button onClick={logOutHandler}>Logout</button>
      </div>
    </header>
  );
};

export default AppHeader;
