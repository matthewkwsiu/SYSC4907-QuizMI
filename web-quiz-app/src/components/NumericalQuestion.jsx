import './css/NumericalQuestion.css';
import QuizDataService from "../services/quiz.service";
import React, { useEffect, useState } from 'react';

function NumericalQuestion(props) {
    const [totalMarks, setMarks] = useState();
    const [userID, setUserID] = useState();
    const [quizID, setQuizID] = useState();
    const [question, setQuestion] = useState('');
    const [solution, setSolution] = useState('');
    const [loadQuestion, setLoad] = useState(false);

    useEffect(() => {
        setUserID(props.insID)
        setQuizID(props.qID)
        if(props.load) {
            setQuestion(props.question)
            setMarks(props.marks)
            setLoad(true)
        }
    }, [])

    useEffect(() => {
        if(totalMarks != null) {
            if(totalMarks < 0 || isNaN(totalMarks)) {
                document.getElementById("totalMark").value = 0
                setMarks(0)
                alert("Total marks must be a positive integer")
            }
        }
    }, [totalMarks])

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
        createQuestion()
    }

    function createQuestion() {
        console.log(quizID)
        var questionToCreate = {
            question_data: 4,
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

    return (
        <>
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Question Title</label>
                {loadQuestion
                ? <input type="text" class="form-control" id="formGroupExampleInput" value={question}></input>
                : <input type="text" class="form-control" id="formGroupExampleInput" placeholder="What is the max value of a 32-bit signed int?"></input>
                }
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Solution</label>
                <input type="number" step="any" class="form-control" id="formGroupExampleInput2" placeholder="2147483647"></input>
            </div>
        </form>
        <div class="form-group row">
            <div class="numberSlider">
                {loadQuestion
                ? <input type="number" class="form-control" id="totalMark" value={totalMarks} onChange={event => setTotalMarks(event.target.value)}></input>
                : <input type="number" class="form-control" id="totalMark" placeholder="Enter Total Marks" onChange={event => setTotalMarks(event.target.value)}></input>
                }
            </div>
        </div>
        <div class="submissionButton">
            <button type="submit" class="btn btn-primary" onClick={submit}>Save</button>
        </div>
        </>
    );
}
export default NumericalQuestion;
