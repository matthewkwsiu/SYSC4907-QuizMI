import './css/TextQuestion.css'

function TextQuestionAnswer(props) {
    return (
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">{getQuestion(props)}</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""></input>
            </div>
            <div class="submitAnswer">
                <button type="submit" class="btn btn-primary">Done</button>
            </div>
        </form>
    );
}

function getQuestion(props) {
    return props.text;
}

export default TextQuestionAnswer;
