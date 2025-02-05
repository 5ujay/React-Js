import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../slice/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users: ", users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    onChange={getUserData}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    onChange={getUserData}
                    required
                  />
                </div>

                {/* Age Field */}
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter your age"
                    name="age"
                    onChange={getUserData}
                    required
                  />
                </div>

                {/* Gender Selection */}
                <div className="mb-3">
                  <label className="form-label d-block">Gender</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={getUserData}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={getUserData}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-success w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
