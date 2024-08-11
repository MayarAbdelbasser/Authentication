import { useEffect, useState } from "react";
import { UseAuth } from "../../context/AuthContext/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Profile.css";

export default function Profile() {
  const { auth, setAuth } = UseAuth();
  const [userInfo, setUserInfo] = useState({});
  const homeNavigate = useNavigate();
  if (auth === null) {
    return <Navigate to="/login" replace />;
  }
  const getFetch = async () => {
    let res = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    let data = await res.json();
    setUserInfo(data);
    console.log(userInfo);
    console.log(auth);
  };

  const deleteCookies = () => {
    setAuth(null);
    homeNavigate("/");
  };

  //get fetch when render
  useEffect(() => {
    getFetch();
    console.log(userInfo);
  }, []);
  return (
    <div className="userInfo-container flex-grow-1 d-flex justify-content-center align-items-center">
      <div className="userInfo-container-background d-flex flex-column flex-lg-row">
        <div className="userInfo-container-image d-flex justify-content-center align-items-center">
          <img src={userInfo.image} className="ratio-1x1" />
        </div>
        <div className="userInfo-container-details d-flex flex-column">
          <p className="userInfo-name">
            {userInfo.firstName} {userInfo.lastName}
          </p>
          <p className="userInfo-emial">{userInfo.email}</p>
          <div className="userInfo-container-body d-flex justify-content-between">
            <div className="height d-flex gap-1 flex-column align-items-center justify-content-center">
              <p className="details-head">Height</p>
              <p className="details-body">{Math.round(userInfo.height)}</p>
            </div>
            <div className="weight d-flex gap-1 flex-column align-items-center justify-content-center">
              <p className="details-head">Weight</p>
              <p className="details-body">{Math.round(userInfo.weight)}</p>
            </div>
            <div className="age d-flex gap-1 flex-column align-items-center justify-content-center">
              <p className="details-head">Age</p>
              <p className="details-body">{Math.round(userInfo.age)}</p>
            </div>
          </div>
          <button className="userInfo-container-button" onClick={deleteCookies}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
