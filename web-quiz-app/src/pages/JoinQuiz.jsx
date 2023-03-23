import HeaderStudent from "../components/HeaderStudent";
import './css/QuizControl.css';
import React from "react";
import { useEffect, useState } from 'react';
import QuizDataService from "../services/quiz.service";

function JoinQuiz() {
    const [nextPage, setNextPage] = useState(false)
    const [quizID, setQuizID] = useState();

    useEffect(() => {
        if(nextPage) {
            window.location.href = '/quizAnswer/' + document.getElementById("quizID").value;
        }
        else {
            alert("This quiz doesn't exost, or is inaccessible")    
        }
    }, [nextPage])

    return (
        <div>
            <HeaderStudent></HeaderStudent>
            <div class="form-group">
                <label for="name">Quiz ID</label>
                <input type="text" class="form-control" id="quizID" placeholder="Enter Quiz ID Here" onChange={event => setQuizID(event.target.value)}></input>
                <button class="btn btn-primary" onClick={NavigateToQuiz}>Join</button>
            </div>
        </div>
    );

    function NavigateToQuiz() {
        QuizDataService.getQuiz(quizID)
        .then(response => {
            if(response.data == 1) {
                setNextPage(true)
            }
            else {
                alert("This quiz doesn't exost, or is inaccessible")
            }
        }).catch(e => {
    
        })
    }
}

export default JoinQuiz;
