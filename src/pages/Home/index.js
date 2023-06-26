import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, getUser, deleteUser } from "../../store/user/actions";
import { selectUser } from "../../selectors";
import { setIsOpen } from "../../store/common/slice";
import UpdatePopap from '../UpdatePopap';

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Get One User and Open Udate Popup
  const updateUserHandler = (id) => () => {
    dispatch(getUser(id));
    dispatch(setIsOpen(true));
  };

  // Delete User
  const deleteUserHandler = (id) => () => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Number</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {users?.map((user) => (
            <tr key={user.Id}>
              <td>{user.Name}</td>
              <td>{user.Surname}</td>
              <td>{user.Number}</td>
              <td>{user.Email}</td>
              <td>
                <button onClick={updateUserHandler(user.Id)}>
                  Update
                </button>
              </td>
              <td>
                <button onClick={deleteUserHandler(user.Id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdatePopap />
    </div>
  );
};

export default Home;
