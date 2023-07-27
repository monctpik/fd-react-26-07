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
        { id: 3, fName: "Elon", lName: "Musk" },
        { id: 1, fName: "Anna", lName: "Polushko" },
        { id: 4, fName: "Vladislav", lName: "Moruga" },
        { id: 2, fName: "Kostya", lName: "Reks" },
        { id: 5, fName: "Valentin", lName: "Grigorenko" },
      ],
      isAscendingSortById: true,
    };
  }
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
    const { users, isAscendingSortById } = this.state;
    return (
      <>
        <h1 className="heading" title="react">
          Hi!
        </h1>
        <button onClick={this.sortById}>
          Sort by ID {isAscendingSortById ? "DOWN" : "UP"}
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
