import React from "react";
import Ciao from "../Ciao/index";

const CiaoList = (props) => {
  const mapUsers = (user) => (
    <li key={user.id}>
      <Ciao fname={user.fName} sname={user.lName} id={user.id} />
    </li>
  );

  const { users } = props;
  return (
    <>
      <ol>{users.map(mapUsers)}</ol>
    </>
  ); 
};

export default CiaoList;
