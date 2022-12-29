import logo from './logo.svg';
import './App.css';
import HeaderInstructor from "./components/HeaderInstructor";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
	  <div className="Header">
	    <HeaderInstructor></HeaderInstructor>
	  </div>
      
      <label>Welcome to the QuizMI Home Page!</label>
      
    </div>
  );
}

export default App;
