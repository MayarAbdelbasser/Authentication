import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import "../../Login/components/Form/Form.css";
import { UseAuth } from "../../../context/AuthContext/AuthContext";

export default function RegisterForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = UseAuth();
  const userRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const getUser = async () => {
    let res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userRef.current.value,
        password: passwordRef.current.value,
        firstName: "Muhammad",
        lastName: "Ovi",
        age: 250,
        email: emailRef.current.value,
      }),
    });
    let data = await res.json();
    console.log(data);
    console.log(res.status);
    if (res.status === 201) {
      setAuth(data);
      Swal.fire({
        title: "Good job!",
        text: "You've create an account succesfully, but it's dummy json you can't use it to login!!",
        icon: "success",
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
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="emil" className="form-label">
            Email
          </label>
          <input
            type="emil"
            id="emil"
            placeholder="Enter you name"
            ref={emailRef}
            required
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
            required
          />
        </div>
        <button type="submit" className="login-button">
          Create Account
        </button>
      </form>
      <div>
        <p className="to-registar">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
}
