import { useEffect } from "react";
import image from "../../media/Croods Sitting in the Park.svg";
import "./Login.css";
import { UseAuth } from "../../context/AuthContext/AuthContext";
import Form from "./components/Form/Form";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { auth } = UseAuth();
  if (auth) {
    return <Navigate to="/profile" replace />;
  }
  useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <div className="login-container d-flex flex-grow-1 flex-column flex-lg-row flex-grow-1">
      <div className="login-container-image  w-100 w-lg-50 d-flex justify-content-center align-items-center">
        <img src={image} />
      </div>
      <div className="login-container-form w-100 w-lg-50 align-items-center d-flex justify-content-center flex-column">
        <h1 style={{ fontSize: "40px" }}>
          Welcome Back<span style={{ color: "#d9f4f6" }}>.</span>
        </h1>
        <Form />
      </div>
    </div>
  );
}
