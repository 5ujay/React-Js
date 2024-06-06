import React, { useEffect, useState } from "react";
import axios from "axios";
const UseEffect = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="px-10">
        <h1 className="py-2 text-3xl font-semibold">useEffect</h1>
        <h1>Users List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error : {error.message}</p>
        ) : (
          <ul>
            {user.map((user) => (
              <li key={user.id}>
                <strong>Name:</strong> {user.name}, <strong>Email:</strong>{" "}
                {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default UseEffect;
