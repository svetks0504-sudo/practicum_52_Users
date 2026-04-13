import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/slices/userSlice";
import styles from "./styles.module.css"


function UserList({ setEditingUser }) {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}
            className={styles.li}>
              <p>
                {user.name}, {user.age}, {user.email}
              </p>
              <button  className={styles.button}
               onClick={() => setEditingUser(user)}>Edit</button>
              <button className={styles.button}
              onClick={() => dispatch(deleteUser(user.id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
