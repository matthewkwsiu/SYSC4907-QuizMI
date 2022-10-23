import './css/QuizEdit.css';

function EditQuiz(){
    return(
        <div>
            <div id="edit-quiz-header">
                <a>Quiz Name</a>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
                <div>
                    <input type="text" value="1234567" id="QuizIdLabel" readOnly/>
                    <button onClick={copyQuizId}>copy</button>
                </div>
            </div>

{/* Add more stuff here */}
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