import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import { UseAuth } from "../../../../context/AuthContext/AuthContext";
import { useRef } from "react";
import Swal from "sweetalert2";

export default function Form() {
  const navigate = useNavigate();
  const { auth, setAuth } = UseAuth();
  const userRef = useRef();
  const passwordRef = useRef();

  const getUser = async () => {
    let res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${userRef.current.value}`,
        password: `${passwordRef.current.value}`,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });
    let data = await res.json();
    if (res.status === 200) {
      setAuth(data);
      navigate("/profile");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Either username or password isn't correct",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  const getAuth = (e) => {
    e.preventDefault();
    getUser();
  };

  return (
    <>
      <form
        style={{ paddingTop: "40px" }}
        className="d-flex flex-column w-75"
        onSubmit={getAuth}
      >
        <div className="d-flex flex-column">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter you name"
            ref={userRef}
          />
        </div>
        <div className="d-flex flex-column pt-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter you password"
            ref={passwordRef}
          />
        </div>
        <button type="submit" className="login-button">
          Log in
        </button>
      </form>
      <div>
        <p className="to-registar">
          Dont have an account? <Link to="/register">Create One</Link>
        </p>
      </div>
    </>
  );
}
