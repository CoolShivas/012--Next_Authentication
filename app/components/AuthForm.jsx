"use client";

import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card p-4"
          style={{ width: "28rem", borderRadius: "12px" }}
        >
          <div className="text-center">
            {isLogin ? (
              <FaSignInAlt size={50} className="text-primary mb-3" />
            ) : (
              <FaUserPlus size={50} className="text-success mb-3" />
            )}
            <h2 className="fw-bold">{isLogin ? "Login" : "Signup"}</h2>
          </div>
          <hr />
          <form>
            {/* user input */}
            {!isLogin && (
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <FaUser className="text-primary" />
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  required
                />
              </div>
            )}

            {/* email input */}
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaEnvelope className="text-success" />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                required
              />
            </div>

            {/* password input */}
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaLock className="text-danger" />
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Log-In / Sign-Up
            </button>
          </form>
          <p
            className="text-center mt-3 text-primary"
            style={{ cursor: "pointer" }}
          >
            Create an account / Alreday have an account? Login
          </p>
          <p className="text-danger text-center mt-2">Alert Message</p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
