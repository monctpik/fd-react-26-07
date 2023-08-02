import React from "react";

const SelectUserList = (props) => {
  const {users} = props;
    const userSelected = users.filter((user) => user.isSelected)
  return (
    <section>
      <h2>Selected users:</h2>
      {userSelected.map((user, i)=><p key={i}>{user.fName}</p>)}
    </section>
  );
};

export default SelectUserList;
