import React, { Component } from "react";
import SelectUserList from "../SelectUserList/index";
import UserList from "../UsersList/index";
import styles from "./UsersDashbord.module.css"
const usersDB = [
  { id: 3, fName: "Elon", lName: "Ausk" },
  { id: 1, fName: "Anna", lName: "Bolushko" },
  { id: 4, fName: "Vladislav", lName: "Coruga" },
  { id: 2, fName: "Kostya", lName: "Deks" },
  { id: 5, fName: "Valentin", lName: "Grigorenko" },
];

class UsersDashbord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  setUsers = (newUsers) => {
    this.setState({
      users: newUsers,
    });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <header className={styles.container}>
          <SelectUserList users={users} />
        </header>
        <main>
          <UserList users={users} setUsers={this.setUsers} />
        </main>
      </>
    );
  }
}

export default UsersDashbord;
