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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);

  const handlerOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log("input field entered", formData);
  };

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
                  className="form-control"
                  required
                  placeholder="Enter the name here"
                  value={formData.name}
                  onChange={handlerOnChange}
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
                className="form-control"
                required
                placeholder="Enter the email here"
                value={formData.email}
                onChange={handlerOnChange}
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
                className="form-control"
                required
                placeholder="Enter the password here"
                value={formData.password}
                onChange={handlerOnChange}
              />
            </div>
            <button
              className={`w-100 ${
                isLogin ? "btn btn-primary" : "btn btn-success"
              }`}
              type="submit"
            >
              {isLogin ? "Log-In" : "Sign-Up"}
            </button>
          </form>
          <p
            className="text-center mt-3 text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Create an account.! Signup"
              : "Alreday have an account.! Login"}
          </p>
          <p className="text-danger text-center mt-2">Alert Message</p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
