import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-12 text-center py-2">
            <img src="img/UserCircle.svg" alt="user" />
            <p className="fs-4 fw-semibold textuser">Login</p>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-pill"
                  placeholder="Email"
                />
                <label for="floatingInput" className="text-center">
                  Email
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control rounded-pill"
                  placeholder="Password"
                />
                <label for="floatingPassword" className="text-center">
                  Password
                </label>
              </div>
            </form>
            <Link
              className="btn rounded-pill py-2 w-100 mt-2 bg_links"
              id="login"
              to="/"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
