import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../store/user/actions";
import { setIsOpen } from "../../store/common/slice";
import { selectCommon, selectUser } from "../../selectors";

const UpdatePopap = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector(selectCommon);
  const { userDetails } = useSelector(selectUser);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(userDetails.Name);
    setSurname(userDetails.Surname);
    setNumber(userDetails.Number);
    setEmail(userDetails.Email);
  }, [userDetails]);

  const closePopupHandler = () => () => {
    dispatch(setIsOpen(false));
  };

  const clearInputsHandler = () => {
    setName("");
    setEmail("");
    setSurname("");
    setNumber("");
  };

  const updateUserHandler = (e) => {
    e.preventDefault();
    clearInputsHandler();
    dispatch(setIsOpen(false));
    dispatch(
      updateUser({
        Id: userDetails.Id,
        Name: name,
        Surname: surname,
        Number: Number(number),
        Email: email,
      })
    );
  };

  return (
    <>
      {isOpen ? (
        <div className="updatePopapContainer">
          <form method="POST">
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
            <button className="popapBtn" onClick={(e) => updateUserHandler(e)}>
              Update
            </button>
            <button className="popapBtn" onClick={closePopupHandler()}>
              Cancel
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default UpdatePopap;
