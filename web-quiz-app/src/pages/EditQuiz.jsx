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
import QuizDataService from "../services/quiz.service";

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
    const [activeStatus, setActiveStatus] = useState(0)

    const getQuizActiveStatus = (quizID) => {
        QuizDataService.getQuiz(quizID)
        .then(response => {
            setActiveStatus(response.data.active_status);
        })
        .catch(e => {
            console.log(e);
        });
    }

    const toggleQuizActiveStatus = (quizID) =>{
        var quiz 
    
        QuizDataService.getQuiz(quizID)
        .then(response => {
            quiz = response.data;
        })
        .catch(e => {
            console.log(e);
        }).then(() => {
            setActiveStatus(1-activeStatus)
            quiz.active_status = 1 - quiz.active_status;
            console.log(quiz)
        });
        
        QuizDataService.updateQuiz(quizID, quiz)
        .then(response => {
            console.log(response.data.active_status);
    
        })
        .catch(e => {
            console.log(e);
        });
    }


    console.log(activeStatus)
    console.log(getQuizActiveStatus(1))
    return(
        <div>
            <HeaderInstructor></HeaderInstructor>
            <div className="EditQuiz">
                <div id="edit-quiz-header">
                    <a>{quizName}</a>

                    <div>
                        <a>Inactive </a>
                        <label class="switch">
                            <input
                                type="checkbox"
                                checked={!!activeStatus}
                            />

                            <span class="slider"></span>
                        </label>
                        <a> Active</a>
                        <p>{activeStatus}</p>
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
            <button onClick={() => getQuizActiveStatus(1)}>
                Activate Lasers
            </button>
            <button onClick={() =>toggleQuizActiveStatus(1)}>
                Toggle Active Status
            </button>
        </div>
    );
}





// function toggleQuizActiveStatus(quizID){
//     var quiz 

//     QuizDataService.getQuiz(quizID)
//     .then(response => {
//         quiz = response.data;
//     })
//     .catch(e => {
//         console.log(e);
//     });

//     quiz.active_status = 1 - quiz.active_status;
//     QuizDataService.updateQuiz(quizID, quiz)
//     .then(response => {
//         console.log(response.data.active_status);

//     })
//     .catch(e => {
//         console.log(e);
//     });
// }


function copyQuizId(){
    var copyText = document.getElementById("QuizIdLabel");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

export default EditQuiz;
