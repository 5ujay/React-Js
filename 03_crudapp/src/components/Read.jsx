import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, readUser } from "../slice/userDetailSlice";
import ViewModal from "./view/ViewModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  const [selectedUser, setSelectedUser] = useState(null); // Store the selected user here

  if (loading) {
    return <h2 className="text-center my-4">Loading...</h2>;
  }

  // Filtering users based on searchData
  const filteredUsers = users.filter((user) => {
    if (searchData.length === 0) {
      return true; // Return all users if searchData is empty
    } else {
      return user.name.toLowerCase().includes(searchData.toLowerCase());
    }
  });

  return (
    <div className="container my-4">
      {selectedUser && (
        <ViewModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
      <h2 className="text-center mb-4">All Users</h2>
      <div className="row justify-content-center">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div className="col-md-6 mb-3" key={user.id}>
              <div className="card shadow-lg rounded">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {user.email}
                  </h6>
                  <p className="card-text">
                    <strong>Gender:</strong> {user.gender}
                  </p>
                  <div className="d-flex gap-2">
                    <button
                      onClick={() => setSelectedUser(user)} // Pass the full user object
                      className="btn btn-info"
                    >
                      View
                    </button>
                    <Link to={`/edit/${user.id}`}>
                      <button className="btn btn-warning text-white">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => dispatch(deleteUser(user.id))}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center text-muted">No users found.</h4>
        )}
      </div>
    </div>
  );
};

export default Read;
