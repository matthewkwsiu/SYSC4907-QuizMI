import HeaderInstructor from "../components/HeaderInstructor";
import './css/QuizControl.css';
import QuizDataService from "../services/quiz.service";
import React from "react";

class QuizControl extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
	  return (
		<div>
		<HeaderInstructor></HeaderInstructor>
		  <button onClick={generateQuizButton}>New Quiz</button>
		  <div id="button-holder"></div>
		</div>
	  );
	}
}

function generateQuizButton(){
	var instructor = {
		instructor_name: "pog"
	}
	 QuizDataService.createInstructor(instructor)
      .then(response => {
        console.log("Created Instructor");
      })
      .catch(e => {
        console.log(e);
      });
	var quizName = prompt("Enter quiz name");
	var quiz = {
		id: 1,
		quiz_name: quizName,
		course_name: "English",
		active_status: 0,
		feedback_status: "yes",
		instructor_id: 1
	}
  QuizDataService.createQuiz(quiz)
      .then(response => {
        console.log("Created Quiz");
      })
      .catch(e => {
        console.log(e);
      });
	  
  var btn = document.createElement("button");
  var t = document.createTextNode(quiz.quiz_name);
  btn.onclick = function() {
	  window.location.href='/editQuiz'
  };
  btn.appendChild(t);
  document.getElementById('button-holder').appendChild(btn);  
}

export default QuizControl;
