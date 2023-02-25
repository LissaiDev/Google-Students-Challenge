import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-12  text-center py-2">
            <img src="img/UserCircle.svg" alt="user" />
            <p class="fs-4 fw-semibold textuser">Sign up</p>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control rounded-pill"
                  placeholder="First name"
                />
                <label for="floatingInput" class="text-center">
                  First name
                </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control rounded-pill"
                  placeholder="Last name"
                />
                <label for="floatingPassword" class="text-center">
                  Last name
                </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control rounded-pill"
                  placeholder="Email"
                />
                <label for="floatingPassword" class="text-center">
                  Email
                </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control rounded-pill"
                  placeholder="Password"
                />
                <label for="floatingPassword" class="text-center">
                  Password
                </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control rounded-pill"
                  placeholder="Confirm password"
                />
                <label for="floatingPassword" class="text-center">
                  Confirm password
                </label>
              </div>
            </form>
            <Link class="btn rounded-pill py-2 w-100 mt-2 bg_links" id="login">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
