import React from "react";
import UserCard from "../UserCard";

const UserList = (props) => {
  const { users, setUsers } = props;

  const setIsSelected = (id) => {
    const newUsers = users.map((user) => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected,
    }));
    setUsers(newUsers);
  };

  const showUser = (user) => (
    <UserCard key={user.id} user={user} setIsSelected={setIsSelected} />
  );

  return (
    <section>
      <h2>Users List:</h2>
      {users.map(showUser)}
    </section>
  );
};

export default UserList;
