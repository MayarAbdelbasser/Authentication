import { Link } from "react-router-dom";
import "./Navbar.css";
import { UseAuth } from "../../context/AuthContext/AuthContext";

export default function Navbar() {
  const { auth } = UseAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fw-bold home" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {auth !== null ? (
                  <Link
                    to="/profile"
                    aria-current="page"
                    className="nav-link active  fs-4 login"
                  >
                    {auth.firstName}
                  </Link>
                ) : (
                  <Link
                    className="nav-link active  fs-4 login"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
