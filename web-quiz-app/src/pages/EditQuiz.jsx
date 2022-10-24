import './css/EditQuiz.css';
import Dropdown from 'react-bootstrap/Dropdown';

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
                <a href={"#"}>Questions</a>
                <a href={"#"}>Responses</a>
            </div>

            <div>
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
            </div>
{/* 
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                    </div>
                    <div class="modal-body">
                    <p>Some text in the modal.</p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
                
                </div>
            </div> */}

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
