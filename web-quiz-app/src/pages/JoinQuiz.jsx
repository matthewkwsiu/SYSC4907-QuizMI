import HeaderStudent from "../components/HeaderStudent";
import './css/QuizControl.css';
import React from "react";
import HeaderStudent from "../components/HeaderInstructor";

function JoinQuiz() {
    return (
        <div>
            <HeaderStudent></HeaderStudent>
            <div class="form-group">
                <label for="name">Quiz ID</label>
                <input type="text" class="form-control" id="quizID" placeholder="Enter Quiz ID Here"></input>
                <button class="btn btn-primary" onClick={NavigateToQuiz}>Join</button>
            </div>
        </div>
    );
}

function NavigateToQuiz() {
    window.location.href = '/joinQuiz/' + document.getElementById("quizID").value;

}

export default JoinQuiz;
