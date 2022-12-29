import './css/TextQuestion.css'

function TextQuestion() {
return(
<form>
    <div class="form-group">
        <label for="formGroupExampleInput">Question Title</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="What is Java?"></input>
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Solution</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="A programming language"></input>
    </div>
    <div class="submissionButton">
        <button type="submit" class="btn btn-primary">Done</button>
    </div>
</form>
);
}

export default TextQuestion;
