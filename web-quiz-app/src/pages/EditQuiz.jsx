import './css/EditQuiz.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HeaderInstructor from "../components/HeaderInstructor";
import TextQuestion from "../components/TextQuestion";
import MultipleSelectQuestion from "../components/MultipleSelectQuestion";
import NumericalQuestion from "../components/NumericalQuestion";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";
import React, { useState } from 'react';

function EditQuiz(){
	const [quizName, setQuizName] = useState(JSON.parse(localStorage.getItem('lastSelectedQuiz')))
    const [questions, setQuestions] = useState([])
    const addQuestion = (question_type) => {
        var newQuestion;
        if(question_type == 1){
            newQuestion = <TextQuestion></TextQuestion>;
        }
        if(question_type == 2){
            newQuestion = <MultipleChoiceQuestion></MultipleChoiceQuestion>;
        }
        if(question_type == 3){
            newQuestion = <MultipleSelectQuestion></MultipleSelectQuestion>;
        }
        if(question_type == 4){
            newQuestion = <NumericalQuestion></NumericalQuestion>;
        }
        setQuestions([...questions, newQuestion])
    };

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
        </div>
    );
}

function copyQuizId(){
    var copyText = document.getElementById("QuizIdLabel");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

export default EditQuiz;
