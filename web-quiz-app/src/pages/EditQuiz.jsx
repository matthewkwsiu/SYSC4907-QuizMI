import './css/EditQuiz.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function EditQuiz(){
    return(
        <div className="EditQuiz">
            <div id="edit-quiz-header">
                <a>Quiz Name</a>

                <div>
                    <a>Active </a>
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider"></span>
                    </label>
                    <a> Inactive</a>
                </div>
                
                <div>
                    <input type="text" value="1234567" id="QuizIdLabel" readOnly/>
                    <button onClick={copyQuizId}>copy</button>
                </div>
            </div>

            <div id="question-response-bar">
                <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                >
                    <Tab eventKey="questions" title="Questions">
                        <div id="question-section">
                            <a>questions will appear here</a><br></br>
                            <a>question 1</a><br></br>
                            <a>question 2</a>
                        </div>

                        <div id="add-question-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Add New Question
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Text</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Multiple Choice</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Multiple Select</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Numerical</Dropdown.Item>
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
