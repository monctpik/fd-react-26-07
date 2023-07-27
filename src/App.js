import "./App.css";
import Ciao from "./components/Ciao";
import MyLink from "./components/MyLink";
import { Component } from "react";

// const user = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 3, fName: "Elon", lName: "Ausk" },
        { id: 1, fName: "Anna", lName: "Bolushko" },
        { id: 4, fName: "Vladislav", lName: "Coruga" },
        { id: 2, fName: "Kostya", lName: "Deks" },
        { id: 5, fName: "Valentin", lName: "Grigorenko" },
      ],
      isAscendingSortById: true,
      // upDown : true,
    };
  }
  sortByLName = () => {
    const { users, upDown } = this.state;
    const copyU = JSON.parse(JSON.stringify(users));
    copyU.sort((a, b) => {
      return upDown ? a.lName.localeCompare(b.lName) : b.lName.localeCompare(a.lName);
    });
    this.setState({
      users: copyU,
      upDown : !upDown
    });
  };
  sortById = () => {
    const { users, isAscendingSortById } = this.state;
    const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((a, b) => {
      return isAscendingSortById ? a.id - b.id : b.id - a.id;
    });
    this.setState({
      users: copyUsers,
      isAscendingSortById: !isAscendingSortById,
    });
  };
  render() {
    const { users, isAscendingSortById, upDown } = this.state;
    return (
      <>
        <h1 className="heading" title="react">
          Hi!
        </h1>
        <button onClick={this.sortById}>
          Sort by ID {isAscendingSortById ? "DOWN" : "UP"}
        </button>
        <button onClick={this.sortByLName}>
          Sort by LNAME {upDown ? "DOWN" : "UP"}
        </button>
        <ol>
          {users.map((user) => (
            <li key={user.id}>
              <Ciao fname={user.fName} sname={user.lName} id={user.id} />
            </li>
          ))}
        </ol>

        {/* <MyLink className="myLink" href="#" /> */}
      </>
    );
  }
}

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

export default App;
