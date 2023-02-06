import HeaderInstructor from "../components/HeaderInstructor";
import './css/QuizControl.css';
import QuizDataService from "../services/quiz.service";
import React from "react";
import { useState, useEffect } from 'react';

function QuizControl() {
	const [quizzes, setQuizzes] = useState();
	const [loaded, setLoaded] = useState(false);
	
        return (
            <div>
                <HeaderInstructor></HeaderInstructor>
				{retrieveAllQuizzes()}
                <button onClick={generateQuizButton}>New Quiz</button>
                <div id="button-holder"></div>
            </div>
        );
		
	function retrieveAllQuizzes() {
		if(!loaded) {
			var allQuizzesOwned;
            QuizDataService.getInstructorID(JSON.parse(localStorage.getItem('user')))
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e)
            });
			//Hardcoded instructor_id for now
			QuizDataService.getInstructorQuizzes(1)
			.then(response => {
				setQuizzes(response.data);
				quizzes.forEach(function (e) {
					var btn = document.createElement("button");
					var t = document.createTextNode(e.quiz_name);
					btn.onclick = function () {
						localStorage.setItem('lastSelectedQuiz', JSON.stringify(e.quiz_name));
						window.location.href = '/editQuiz'
					};
					btn.appendChild(t);
					document.getElementById('button-holder').appendChild(btn);
					});

				setLoaded(true);
			})
			.catch(e => {
				console.log(e);
			});
		}
	}
	
	function generateQuizButton() {
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
    btn.onclick = function () {
		localStorage.setItem('lastSelectedQuiz', JSON.stringify(quiz.quiz_name));
        window.location.href = '/editQuiz';
		setLoaded(false);
    };
    btn.appendChild(t);
    document.getElementById('button-holder').appendChild(btn);
}
}

export default QuizControl;
