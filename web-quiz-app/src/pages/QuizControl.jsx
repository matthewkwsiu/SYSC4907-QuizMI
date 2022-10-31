import HeaderInstructor from "../components/HeaderInstructor";
import './css/QuizControl.css';

function QuizControl() {
  return (
    <div>
    <HeaderInstructor></HeaderInstructor>
      <button onClick={generateQuizButton}>New Quiz</button>
      <div id="button-holder"></div>
    </div>
  );
}

function generateQuizButton(){
  var btn = document.createElement("button");        
  var t = document.createTextNode("Quiz #1");       
  btn.appendChild(t);                                
  document.getElementById('button-holder').appendChild(btn);    
}

export default QuizControl;
