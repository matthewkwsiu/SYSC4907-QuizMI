import './css/EditQuiz.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HeaderInstructor from "../components/HeaderInstructor";
import TextQuestion from "../components/TextQuestion";
import MultipleSelectQuestion from "../components/MultipleSelectQuestion";
import NumericalQuestion from "../components/NumericalQuestion";
import React, { useState } from 'react';
import QuizDataService from "../services/quiz.service";

function EditQuiz(){
    const [questions, setQuestions] = useState([])
    const addQuestion = (question_type) => {
        var newQuestion;
        if(question_type == 1){
            newQuestion = <TextQuestion></TextQuestion>;
        }
        if(question_type == 2){
            // newQuestion = <></>;
        }
        if(question_type == 3){
            newQuestion = <MultipleSelectQuestion></MultipleSelectQuestion>;
        }
        if(question_type == 4){
            newQuestion = <NumericalQuestion></NumericalQuestion>;
        }
        setQuestions([...questions, newQuestion])
    };
    const [activeStatus, setActiveStatus] = useState(false)
    const toggleActiveStatus = () => {
        console.log(activeStatus)
        setActiveStatus(!activeStatus)
        console.log(activeStatus)
    }
    return(
        <div>
            <HeaderInstructor></HeaderInstructor>
            <div className="EditQuiz">
                <div id="edit-quiz-header">
                    <a>Quiz Name</a>

                    <div>
                        <a>Inactive </a>
                        <label class="switch">
                            <input
                                type="checkbox"
                                onChange={(event) => setActiveStatus(event.currentTarget.checked)}
                                checked={activeStatus}
                            />

                            <span class="slider"></span>
                        </label>
                        <a> Active</a>
                    </div>
                    
                    <div>
                        <input type="text" value="1234567" id="QuizIdLabel" readOnly/>
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
                                    <Dropdown.Item onClick={e => {addQuestion(1);}}>Text</Dropdown.Item>
                                    <Dropdown.Item onClick={e => {addQuestion(2);}}>Multiple Choice</Dropdown.Item>
                                    <Dropdown.Item onClick={e => {addQuestion(3);}}>Multiple Select</Dropdown.Item>
                                    <Dropdown.Item onClick={e => {addQuestion(4);}}>Numerical</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </Tab>
                        <Tab eventKey="responses" title="Responses">
                            <a>Here are the responses</a>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <button onClick={getQuizActiveStatus}>
                Activate Lasers
            </button>
            <button onClick={toggleActiveStatus}>
                Toggle Active Status
            </button>
        </div>
    );
}

function getQuizActiveStatus(){
    var quiz = QuizDataService.getQuiz(1)
    .then(response => {
        console.log("Get Quiz" + quiz);
    })
    .catch(e => {
        console.log(e);
    });
    quiz.then((response) => response.json());
    // .then((data) => console.log(""));
    return quiz.active_status;
}

function toggleQuizActiveStatus(){
    var quiz = QuizDataService.getQuiz(1)
    .then(response => {
        console.log("Get Quiz" + quiz);
    })
    .catch(e => {
        console.log(e);
    });
    // toggle active_status value
    quiz.active_status = 1 - quiz.active_status;
    QuizDataService.updateQuiz(1, quiz)
    .then(response => {
        console.log("Get Quiz" + quiz.id);
    })
    .catch(e => {
        console.log(e);
    });
}

function copyQuizId(){
    var copyText = document.getElementById("QuizIdLabel");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

export default EditQuiz;
