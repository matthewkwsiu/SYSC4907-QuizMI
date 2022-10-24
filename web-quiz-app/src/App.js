import logo from './logo.svg';
import './App.css';
import HeaderInstructor from "./components/HeaderInstructor";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditQuiz from "./pages/EditQuiz"

function App() {
  return (
    
    <div className="App">
	  <div className="Header">
	    <HeaderInstructor></HeaderInstructor>
	  </div>
    <EditQuiz>
    </EditQuiz>
      
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
