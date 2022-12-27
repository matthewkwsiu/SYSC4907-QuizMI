import './css/TextQuestion.css'

function TextQuestionAnswer() {
    return(
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">QUESTION SHOULD BE HERE</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="What is Java?"></input>
            </div>
            <div class="submitAnswer">
                <button type="submit" class="btn btn-primary">Done</button>
            </div>
        </form>
    );
}

export default TextQuestionAnswer;
