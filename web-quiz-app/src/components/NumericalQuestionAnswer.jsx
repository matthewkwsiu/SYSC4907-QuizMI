import './css/NumericalQuestion.css'

function NumericalQuestionAnswer(props) {
    return (
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">{getQuestion(props)}</label>
                <input type="number" step="any" class="form-control" id="formGroupExampleInput2" placeholder=""></input>
            </div>
            <div class="submissionButton">
                <button type="submit" class="btn btn-primary">Done</button>
            </div>
        </form>
    );
}

function getQuestion(props) {
    return props.text;
}

export default NumericalQuestionAnswer;
