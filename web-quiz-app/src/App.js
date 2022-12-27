import logo from './logo.svg';
import './App.css';
import HeaderInstructor from "./components/HeaderInstructor";
import 'bootstrap/dist/css/bootstrap.min.css';
import JoinQuiz from './pages/JoinQuiz';

function App() {
  return (
    
    <div className="App">
	  <div className="Header">
	    <HeaderInstructor></HeaderInstructor>
	  </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
