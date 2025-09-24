"use client";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const page = () => {
  const router = useRouter();

  const [userData, setUserData] = useState(null);

  const handlerOnLogOut = () => {
    console.log("user logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  useEffect(() => {
    // // // Now, getting the whole details of user as already stored in the Local Storage;
    // // // At the time of setItems in local storage we have given the key "user" and getting it here;

    const storeSavedUser = localStorage.getItem("user");

    if (!storeSavedUser) {
      // // // if user not stored on localStorage then redirecting it to login page;

      router.push("/");
    } else {
      // // // If having the user details in the localStorage then parse it to render the profile page data;

      setUserData(JSON.parse(storeSavedUser));
    }
  }, []);

  if (!userData) {
    // // // If not having the user data on local storage then return null;
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-5 d-flex justify-content-center ">
        <div
          className="card p-4"
          style={{ width: "28rem", borderRadius: "15px" }}
        >
          <div className="text-center">
            <FaUser size={60} className="text-primary mb-3" />
            <h2>User Profile</h2>
          </div>
          <hr />
          <div className="px-3">
            <p className="d-flex align-items-center">
              <FaUser className="text-primary me-2" />
              <span>Name : {userData.userName}</span>
            </p>
            <p className="d-flex align-items-center">
              <FaEnvelope className="text-success me-2" />
              <span>Email : {userData.userEmail}</span>
            </p>
          </div>
          <button
            className="btn btn-danger w-100 mt-3 d-flex justify-content-center align-items-center"
            onClick={handlerOnLogOut}
          >
            <FaSignOutAlt className="me-2" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
