import HeaderStudent from "../components/HeaderInstructor";

function JoinQuiz() {
  return (
    <div>
        <HeaderStudent></HeaderStudent>
        <form>
            <div class="form-group">
                <label>Quiz ID</label>
                <input class="form-control" placeholder="Enter Quiz ID"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  );
}

export default JoinQuiz;
