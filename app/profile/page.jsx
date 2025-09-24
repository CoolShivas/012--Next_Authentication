"use client";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";

const page = () => {
  return (
    <div>
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
              <strong>Name :</strong>
            </p>
            <p className="d-flex align-items-center">
              <FaEnvelope className="text-success me-2" />
              <strong>Email :</strong>
            </p>
          </div>
          <button className="btn btn-danger w-100 mt-3 d-flex justify-content-center align-items-center">
            <FaSignOutAlt className="me-2" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
