import logo from './logo.svg';
import './App.css';
import HeaderInstructor from "./components/HeaderInstructor";

function App() {
  return (
    <div className="App">
    <HeaderInstructor></HeaderInstructor>
      <button onClick={generateQuizButton}>New Quiz</button>
      <div id="button-holder"></div>
    </div>
  );
}

function generateQuizButton(){
  var btn = document.createElement("button");        
  var t = document.createTextNode("button text");       
  btn.appendChild(t);                                
  document.getElementById('button-holder').appendChild(btn);    
}

export default App;
