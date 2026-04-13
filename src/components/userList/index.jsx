import { useDispatch, useSelector } from "react-redux";
import { editUser, deleteUser } from "../../redux/slices/userSlice";

function UserList() {
  const users = useSelector((state) => state.users);
  const dispstch = useDispatch();

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <p>
                {user.name}, {user.age}, {user.email}
              </p>
              <button onClick={() => dispstch(editUser(user.id))}>Edit</button>
              <button onClick={() => dispstch(deleteUser(user.id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UserList;
