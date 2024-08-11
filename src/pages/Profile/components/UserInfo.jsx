import styles from "./UserInfo.module.css";

export default function UserInfo({ username, password, id }) {
  return (
    <div className={styles.user}>
      <p className="m-0 w-25">{id}</p>
      <p className="m-0">{username}</p>
      <p className="m-0">{password}</p>
    </div>
  );
}
