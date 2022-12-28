import logo from './logo.svg';
import './App.css';
import HeaderInstructor from "./components/HeaderInstructor";
import 'bootstrap/dist/css/bootstrap.min.css';
import JoinQuiz from './pages/JoinQuiz';
import TextQuestionAnswer from './components/TextQuestionAnswer';
import MultipleSelectQuestionAnswer from './components/MultipleSelectQuestionAnswer';

function App() {
  return (
    
    <div className="App">
	  <div className="Header">
	    <HeaderInstructor></HeaderInstructor>
      <TextQuestionAnswer text="Here is a question"></TextQuestionAnswer>
      <MultipleSelectQuestionAnswer text="Which of of the following fruits is a citrus?||| orange, apple, peach, mango"></MultipleSelectQuestionAnswer>
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
