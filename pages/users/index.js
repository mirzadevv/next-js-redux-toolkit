import styles from "../../styles/users.module.css";
import { loadUsers } from "../../store/slices/usersSlices";
import { wrapper } from "../../store/index";
import { useSelector } from "react-redux";

export default function Users({ resolvedUrl }) {
  const {
    users: {
      users: { users },
    },
  } = useSelector((state) => state.users);
  console.log(users, "users");
  console.log(resolvedUrl);
  return (
    <div className={styles.usersContainer}>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ resolvedUrl }) => {
      console.log("resolvedUrl", resolvedUrl);
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();

      store.dispatch(loadUsers(data));
      return {
        props: { resolvedUrl },
      };
    }
);
