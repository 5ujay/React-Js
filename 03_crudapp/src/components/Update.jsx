import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../slice/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading } = useSelector((state) => state.app);

  const [updatedData, setUpdatedData] = useState({}); // Initialize with empty object

  useEffect(() => {
    if (id && users.length) {
      const singleUser = users.find((user) => user.id === id); 
      if (singleUser) {
        setUpdatedData(singleUser);
      }
    }
  }, [id, users]); // Add id and users as dependencies

  const newData = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updatedData));
    navigate("/read");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <form onSubmit={handleUpdate}>
                {/* Name Field */}
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={updatedData.name || ""}
                    onChange={newData}
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
                    value={updatedData.email || ""}
                    onChange={newData}
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
                    value={updatedData.age || ""}
                    onChange={newData}
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
                      checked={updatedData.gender === "Male"}
                      onChange={newData}
                      name="gender"
                      value="Male"
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={updatedData.gender === "Female"}
                      onChange={newData}
                      name="gender"
                      value="Female"
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

export default Update;
