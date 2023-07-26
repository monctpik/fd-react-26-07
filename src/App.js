
import './App.css';
import Ciao from './components/Ciao';

function App() {
  const user = {
    id: 1,
    firstName : 'Elon',
    lastName: 'Musk'
  }
  return (
  <>
    <h1 className='heading' title='why?' >Hello World!</h1>
    <Ciao fname="Vladislav" sname="Moruga" isHi = {false}/>
    <Ciao fname="Anna" sname="Polushko" isHi = {true} />
    <Ciao fname="Vladimir" sname="Zelenskiy" isHi = {false}/>
    <Ciao fname={user.firstName} sname={user.lastName} isHi = {true}/>
  </>
  )
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
