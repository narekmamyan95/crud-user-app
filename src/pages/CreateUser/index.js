import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/user/actions";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const clearInputsHandler = () => {
    setName("");
    setEmail("");
    setSurname("");
    setNumber("");
  };

  const updateUserHandler = (e) => {
    e.preventDefault();
    clearInputsHandler();
    dispatch(
      createUser({
        values: {
          Name: name,
          Surname: surname,
          Number: Number(number),
          Email: email,
        },
        navigate,
      })
    );
  };

  return (
    <div>
      <form method="POST" className="createContainer">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button onClick={(e) => updateUserHandler(e)}>Create User</button>
      </form>
    </div>
  );
};

export default Create;
