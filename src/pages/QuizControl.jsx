import HeaderInstructor from "../components/HeaderInstructor";
import './css/QuizControl.css';
import QuizDataService from "../services/quiz.service";
import React from "react";
import { useState, useEffect } from 'react';

function QuizControl() {
    const [userID, setUserID] = useState();
	const [quizzes, setQuizzes] = useState();

    useEffect(() => {
        QuizDataService.getInstructorID(JSON.parse(localStorage.getItem('user')))
        .then(response => {
            setUserID(response.data)
        })
        .catch(e => {
            console.log(e)
        });
    }, [])

    useEffect(() => {
        if(userID) {
            retrieveAllQuizzes()
        }
    }, [userID])

    useEffect(() => {
        if(quizzes) {
            quizzes.forEach(function (e) {
                var btn = document.createElement("button");
                var t = document.createTextNode("Quiz: " + e.quiz_name + " Course: " + e.course_name);
                btn.onclick = function () {
                    localStorage.setItem('lastSelectedQuiz', JSON.stringify(e.quiz_name));
                    window.location.href = '/editQuiz'
                };
                btn.appendChild(t);
                document.getElementById('button-holder').appendChild(btn);
                });
        }
    }, [quizzes])
	
        return (
            <div>
                <HeaderInstructor></HeaderInstructor>
                <button onClick={generateQuizButton}>New Quiz</button>
                <div id="button-holder"></div>
            </div>
        );

	function retrieveAllQuizzes() {

                QuizDataService.getInstructorQuizzes(userID)
                .then(response => {
                    setQuizzes(response.data);
                })
                .catch(e => {
                    console.log(e);
                });

		
	}
	
	function generateQuizButton() {
    var quizName = prompt("Enter quiz name");
    var coursename = prompt("Enter course subject");
    var quiz = {
        quiz_name: quizName,
        course_name: coursename,
        active_status: 0,
        feedback_status: "no",
        instructor_id: userID
    }
    if(!(coursename == '' || quizName == '')) {
        QuizDataService.createQuiz(quiz)
            .then(response => {
                if(response.status == 201) {
                    console.log("Created Quiz");
                    var btn = document.createElement("button");
                    var t = document.createTextNode("Quiz: " + quiz.quiz_name + " Course: " + quiz.course_name);
                    btn.onclick = function () {
                        localStorage.setItem('lastSelectedQuiz', JSON.stringify(quiz.quiz_name));
                        window.location.href = '/editQuiz';
                    };
                    btn.appendChild(t);
                    document.getElementById('button-holder').appendChild(btn);
                }
                else {
                    alert("Problem creating quiz or the quiz exists already")
                }
            })
            .catch(e => {
                alert("Problem creating quiz or the quiz exists already")
                console.log(e);
            });
        }
        else {
            alert("Quiz name or course name was left blank!")
        }
    }
}

export default QuizControl;
