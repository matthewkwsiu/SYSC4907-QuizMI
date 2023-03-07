import { useState, useEffect } from "react";
import QuizDataService from "../services/quiz.service";

function MultipleChoiceQuestion(props) {
  const [inputFields, setInputFields] = useState([
    { option: ""},
  ]);
  const [questionName, setQuestionName] = useState();
  const [solution, setSolution] = useState();
  const [userID, setUserID] = useState();
  const [quizID, setQuizID] = useState();
  const [totalMarks, setMarks] = useState();
  const [count, setCount] = useState(1)

  useEffect(() => {
    setUserID(props.insID)
    setQuizID(props.qID)
}, [])
  
  const addFields = () => {
	  if(count < 7) {
		let newfield = { option: ""};
		setInputFields([...inputFields, newfield]);
		setCount(count + 1)
	  }
	  else {
		  alert("Reached max questions!")
	  }
  };
  const removeFields = (index) => {
	  if(count > 1) {
		 let data = [...inputFields];
		 data.splice(index, 1)
		 setInputFields(data)
		 setCount(count - 1)
	  }
	  else {
		  alert("Cannot remove any more questions!")
	  }
  }
  const handleFormChange = (index, event) => {
	  let data = [...inputFields];
	  data[index][event.target.name]=event.target.value;
	  setInputFields(data);
  }

  function submit() {
    createQuestion()
}

function createQuestion() {
    var choiceData = "";
    var solutionText = "";
    for(let i = 0; i < inputFields.length; i++) {
        if(solution == i) {
            solutionText = inputFields[i].option
        }
        choiceData = choiceData + inputFields[i].option + ","
    }
    var questionText = questionName + "|||" + choiceData

    var questionToCreate = {
        question_data: 2,
        question_text: questionText,
        question_total_marks: Number(totalMarks),
        quiz_id: quizID,
        question_solution: solutionText,
    };

    console.log(questionToCreate)

    QuizDataService.createQuestion(questionToCreate)
                .then(response => {
                    console.log(questionToCreate);
                })
                .catch(e => {
                    console.log(e);
                });
}

  return (
    <div className="MultipleChoice">
      <form>
        <div class="row">
          <div class="col">
            <label type="text">Question Title</label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingQuestion"
                onChange={event => setQuestionName(event.target.value) }
              ></input>
              <label for="floatingQuestion">Question</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label type="text">Choices</label>
          </div>
          <div class="col">
            <label type="text">Correct Response</label>
          </div>
          <div class="col">
          </div>
        </div>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <div class="row">
                <div class="col">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="option"
                      id="floatingInput"
                      value={input.option}
					  onChange={event => handleFormChange(index, event)}
                    />
                    <label for="floatingInput">Answer</label>
                  </div>
                </div>
                <div class="col">
                  <input
                    class="form-check-input"
					name="radioButton"
                    type="radio"
                    onClick={() => setSolution(index) }
                  />
                </div>
                <div class="col">
                  <button type="button" class="btn btn-link" onClick={() => removeFields(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </form>
      <div class="form-group row">
            <div class="numberSlider">
                <input type="number" class="form-control" id="totalMark" placeholder="Enter Total Marks" onChange={event => setMarks(event.target.value)}></input>
            </div>
        </div>
      <div class="submission">
        <button type="submit" class="btn btn-primary" onClick={addFields}>
          Add More..
        </button>
      </div>
      <div class="submissionButton">
            <button type="submit" class="btn btn-primary" onClick={submit}>Save</button>
        </div>
    </div>
  );
}

export default MultipleChoiceQuestion;
