import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../app/UserSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  console.log(users);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>CRUD APP WITH REACT AND REDUX</h2>
      <Link to="/create">
        {" "}
        <button className="btn btn-success my-3">Create</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="">
                <Link to={`/edit/${user.id}`}>
                  <button className="btn btn-sm btn-primary">Edit</button>
                </Link>

                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
