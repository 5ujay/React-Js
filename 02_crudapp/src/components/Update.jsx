import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../app/UserSlice";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.filter((user) => user.id == id);
  const { name, email } = existingUser[0];

  const [newName, setNewname] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: newName,
        email: newEmail,
      })
    );
    navigate("/")
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="text-center text-primary mb-4">Update Account</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={newName}
                    onChange={(e) => setNewname(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                </div>

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
