import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <header className="navbar navbar-expand-xxl">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="img-fluid" src="img/logo.svg" id="logo_header" />
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbar"
        >
          <img src="img/menu-bar 1.svg" className="img-fluid" />
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Cultivo
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-Dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  What's cultivo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Buy products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Sell products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Transport products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Payment methods
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signUp">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
