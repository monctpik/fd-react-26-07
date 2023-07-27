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
    };
  }
  sortById = () => {
    const {users} = this.state
    users.sort((a,b)=>{
      return a.id-b.id
    })
    this.setState({users})
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <h1 className="heading" title="react">
          Hi!
        </h1>
        <button onClick={this.sortById}>Sort by ID</button>
        <ol>
          {users.map((user, i) => (
            <li key={i}>
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
