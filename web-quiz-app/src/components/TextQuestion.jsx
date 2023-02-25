import './css/TextQuestion.css'
import QuizDataService from "../services/quiz.service";
import React, { useEffect, useState } from 'react';

function TextQuestion() {
    const [totalMarks, setMarks] = useState();
    const [userID, setUserID] = useState();
    const [quizID, setQuizID] = useState();
    const [question, setQuestion] = useState('');
    const [solution, setSolution] = useState('');

    useEffect(() => {
        if(totalMarks != null) {
            if(totalMarks < 0 || isNaN(totalMarks)) {
                document.getElementById("totalMark").value = 0
                setMarks(0)
                alert("Total marks must be a positive integer")
            }
        }
    }, [totalMarks])

    useEffect(() => {
        if(quizID != null) {
            createQuestion()
        }
    }, [quizID])

    useEffect(() => {
        QuizDataService.getInstructorID(JSON.parse(localStorage.getItem('user')))
                .then(response => {
                    setUserID(response.data);
                })
                .catch(e => {
                    console.log(e)
                });
    }, [])

    return (
        <>
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Question Title</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="What is Java?" onChange={event => setQuestionName(event.target.value)}></input>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Solution</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="A programming language" onChange={event => setSolutionResult(event.target.value)}></input>
            </div>
        </form>
        <div class="form-group row">
            <div class="numberSlider">
                <input type="number" class="form-control" id="totalMark" placeholder="Enter Total Marks" onChange={event => setTotalMarks(event.target.value)}></input>
            </div>
        </div>
        <div class="submissionButton">
            <button type="submit" class="btn btn-primary" onClick={submit}>Save</button>
        </div>
        </>
    );

    function setTotalMarks(input) {
        setMarks(input)
    }

    function setQuestionName(input) {
        setQuestion(input)
    }

    function setSolutionResult(input) {
        setSolution(input)
    }

    function submit() {
        QuizDataService.crossCheckQuizID(JSON.parse(localStorage.getItem('lastSelectedQuiz')), userID)
        .then(response => {
            setQuizID(response.data)
        })
        .catch(e =>{
            console.log(e)
        })
    }

    function createQuestion() {
        console.log(quizID)
        var questionToCreate = {
            question_data: 1,
            question_text: question,
            question_total_marks: Number(totalMarks),
            quiz_id: quizID,
        };
        QuizDataService.createQuestion(questionToCreate)
            .then(response => {
                console.log(questionToCreate);
            })
            .catch(e => {
                console.log(e);
            });
    }
}
export default TextQuestion;
