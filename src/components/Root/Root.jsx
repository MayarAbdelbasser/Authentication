import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Root.css";

export default function Root() {
  return (
    <div className="d-flex flex-column root-tree">
      <Navbar />
      <Outlet />
    </div>
  );
}
