import { useEffect, useState } from "react";
import "./Home.css";
import UserInfo from "../Profile/components/UserInfo";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  //fetch users
  const getUsers = async () => {
    let res = await fetch("https://dummyjson.com/users?limit=10");
    let data = await res.json();
    setUsers(data.users);
    console.log(data.users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="barlow-regular">
      <h1 className="home-heading fw-bold my-5">
        Kindly, please use one of the following users and its password to{" "}
        <Link to="/login">login</Link>:
      </h1>
      <div className="usersInfo-container d-flex flex-column mt-4 w-75 mx-auto">
        <div className="userInfo-container-header d-flex">
          <p className="m-0 d-flex justify-content-center align-items-center w-25">
            No.
          </p>
          <p className="m-0 d-flex justify-content-center align-items-center w-">
            Username
          </p>
          <p className="m-0 d-flex justify-content-center align-items-center">
            password
          </p>
        </div>
        <div className="usersInfo-container-content d-flex flex-column">
          {users.map((user) => {
            return (
              <UserInfo
                key={user.id}
                username={user.username}
                id={user.id}
                password={user.password}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
