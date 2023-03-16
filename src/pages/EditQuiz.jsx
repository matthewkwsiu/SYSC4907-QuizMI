import './css/EditQuiz.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HeaderInstructor from "../components/HeaderInstructor";
import TextQuestion from "../components/TextQuestion";
import MultipleSelectQuestion from "../components/MultipleSelectQuestion";
import NumericalQuestion from "../components/NumericalQuestion";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";
import React, { useEffect, useState } from 'react';
import QuizResponses from "./QuizResponses";
import QuizDataService from "../services/quiz.service";

function EditQuiz(){
	const [quizName, setQuizName] = useState(JSON.parse(localStorage.getItem('lastSelectedQuiz')))
    const [questions, setQuestions] = useState([])
    const [userID, setUserID] = useState();
    const [quizID, setQuizID] = useState();
    const [responses, setResponses] = useState();

    useEffect(() => {
        QuizDataService.getInstructorID(JSON.parse(localStorage.getItem('user')))
                .then(response => {
                    setUserID(response.data);
                })
                .catch(e => {
                    console.log(e)
                });
    }, [])

    useEffect(() => {
        if(userID) {
            QuizDataService.crossCheckQuizID(JSON.parse(localStorage.getItem('lastSelectedQuiz')), userID)
            .then(response => {
                setQuizID(response.data)
            })
            .catch(e =>{
                console.log(e)
            })
        }
    }, [userID])

    useEffect(() => {
        loadAllQuestions()
    }, [quizID])

    useEffect(() => {
        initializeResponses()
    }, [quizID])

    const addQuestion = (question_type) => {
        var newQuestion;
        if(question_type == 0){
            newQuestion = <TextQuestion insID={userID} qID={quizID} load={false}></TextQuestion>;
        }
        if(question_type == 2){
            newQuestion = <MultipleChoiceQuestion insID={userID} qID={quizID} load={false}></MultipleChoiceQuestion>;
        }
        if(question_type == 3){
            newQuestion = <MultipleSelectQuestion insID={userID} qID={quizID} load={false}></MultipleSelectQuestion>;
        }
        if(question_type == 1){
            newQuestion = <NumericalQuestion insID={userID} qID={quizID} load={false}></NumericalQuestion>;
        }
        setQuestions([...questions, newQuestion])
    };

    function loadAllQuestions() {
        if(quizID) {
            QuizDataService.getQuizQuestions(quizID)
            .then(response => {
                var questionsToBeAdded = []
                response.data.forEach(function (e) {
                    var newQuestion;
                    console.log(e.question_data)
                    switch(e.question_data) {
                        case 0:
                            newQuestion = <TextQuestion insID={userID} qID={quizID} load={true} questionID={e.id} question={e.question_text} solution={e.question_solution} marks={e.question_total_marks}></TextQuestion>;
                            break;
                        case 2:
                            newQuestion = <MultipleChoiceQuestion insID={userID} qID={quizID} load={true} questionID={e.id} question={e.question_text} solution={e.question_solution} marks={e.question_total_marks}></MultipleChoiceQuestion>;
                            break;
                        case 3:
                            newQuestion = <MultipleSelectQuestion insID={userID} qID={quizID} load={true} questionID={e.id} question={e.question_text} solution={e.question_solution} marks={e.question_total_marks}></MultipleSelectQuestion>;
                            break;
                        case 1:
                            newQuestion = <NumericalQuestion insID={userID} qID={quizID} load={true} questionID={e.id} question={e.question_text} solution={e.question_solution} marks={e.question_total_marks}></NumericalQuestion>;
                            break;
                    }
                    questionsToBeAdded.push(newQuestion)
                })
                setQuestions([...questions, questionsToBeAdded])
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
    
    function copyQuizId(){
        var copyText = document.getElementById("QuizIdLabel");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    }

    function initializeResponses(){
        if(quizID){
            setResponses(<QuizResponses quiz_id={quizID}/>);
        }
    }

    return(
        <div>
            <HeaderInstructor></HeaderInstructor>
            <div className="EditQuiz">
                <div id="edit-quiz-header">
                    <a>{quizName}</a>

                    <div>
                        <a>Inactive </a>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider"></span>
                        </label>
                        <a> Active</a>
                    </div>
                    
                    <div>
                        <input type="text" value={quizID} id="QuizIdLabel" readOnly/>
                        <button onClick={copyQuizId}>copy</button>
                    </div>
                </div>

                <div id="question-response-bar">
                    <Tabs
                    defaultActiveKey="questions"
                    id="justify-tab-example"
                    className="mb-3"
                    >
                        <Tab eventKey="questions" title="Questions">
                            {questions}

                            <div id="add-question-dropdown">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Add New Question
                                </Dropdown.Toggle>
                                <Dropdown.Menu id="question_dropdown">
                                    <Dropdown.Item onClick={e => {addQuestion(0);}}>Text</Dropdown.Item>
                                    <Dropdown.Item onClick={e => {addQuestion(2);}}>Multiple Choice</Dropdown.Item>
                                    <Dropdown.Item onClick={e => {addQuestion(3);}}>Multiple Select</Dropdown.Item>
                                    <Dropdown.Item onClick={e => {addQuestion(1);}}>Numerical</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </Tab>
                        <Tab eventKey="responses" title="Responses">
                            {responses}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default EditQuiz;
