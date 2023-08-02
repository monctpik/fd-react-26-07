import React, { Component } from "react";
import UserCard from "../UserCard";
const usersDB = [
  { id: 3, fName: "Elon", lName: "Ausk" },
  { id: 1, fName: "Anna", lName: "Bolushko" },
  { id: 4, fName: "Vladislav", lName: "Coruga" },
  { id: 2, fName: "Kostya", lName: "Deks" },
  { id: 5, fName: "Valentin", lName: "Grigorenko" },
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  setIsSelected = (id) => {
    const {users} = this.state
    const newUsers = users.map((user)=>({
      ...user, 
      isSelected: user.id === id ? !user.isSelected : user.isSelected
    }))
    this.setState({
      users: newUsers
    })
  };
  showUser = (user) => <UserCard key={user.id} user={user} setIsSelected = {this.setIsSelected} />;
  render() {
    const { users } = this.state;
    return (
      <section>
        <h2>Users List:</h2>
        {users.map(this.showUser)}
      </section>
    );
  }
}

export default UserList;
