"use client";
import axios from "axios";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);
  const [isMessage, setIsMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlerOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // console.log("input field entered", formData);
  };

  const handlerOnSubmitForm = async (event) => {
    event.preventDefault();

    try {
      // // // http://localhost:3000/api/user?login=true
      const url = isLogin ? "/api/user?login=true" : "/api/user?signup=true";

      const { data } = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Printing data of backend => ", data); // // Getting the data on Broser's Console now;
      alert(data.message);
      setIsMessage(data.message);

      if (isLogin) {
        // // // Saving or storing the token and user information to local storage by key in double quotes and then value;
        localStorage.setItem("token", data.generateToken);
        // // // As we have already made the api's which are in json format that' why we have to use JSON.stringify(data.userLogin) here;
        localStorage.setItem("user", JSON.stringify(data.userLogin));

        // // // If user login having token and user information to local storage;
        // // // Re-direct it to profile page. If not then signup first then login redirect to profile page;
        router.push("/profile");
      }
    } catch (error) {
      setIsMessage("Something went wrong on AuthForm");
    } finally {
      setIsLoading(false);
    }
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
          <form onSubmit={handlerOnSubmitForm}>
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
              {isLoading ? "Processing..." : isLogin ? "Login" : "Signup"}
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
          {isMessage && (
            <p className="text-danger text-center mt-2">{isMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
