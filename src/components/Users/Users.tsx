import React, { useEffect, useState } from "react";
import "./Users.scss";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="users">
      <h2>Users component</h2>

      <div className="list">
        {users.map((item) => (
          <div className="list__item" key={item.id} data-testid="user-item">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
