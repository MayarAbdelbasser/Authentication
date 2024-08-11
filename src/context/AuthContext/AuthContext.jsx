import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const authContext = createContext();

const getAuthCookie = () => {
  const authCookie = Cookies.get("auth");
  if (authCookie) {
    return JSON.parse(authCookie);
  } else {
    return null;
  }
};

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(getAuthCookie());
  useEffect(() => {
    Cookies.set("auth", JSON.stringify(auth), { expires: 1 });
  }, [auth]);
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
}

export function UseAuth() {
  const { auth, setAuth } = useContext(authContext);
  return { auth, setAuth };
}
