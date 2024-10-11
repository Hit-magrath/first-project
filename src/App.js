// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
function MyButton(){
  return (
    <button>
      right here 
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1> This the first project Shon,it's a button.</h1>
      <MyButton />
    </div>
  );
}