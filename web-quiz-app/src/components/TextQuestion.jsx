import './css/TextQuestion.css'
import QuizDataService from "../services/quiz.service";
import React, { useState } from 'react';

 function TextQuestion() {
       const [question, setQuestion]=useState('');
       const [solution, setSolution]=useState('');
 return(
 <form>
    <div class="form-group">
      <label for="formGroupExampleInput">Question Title</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="What is Java?" onChange={event => setQuestionName(event.target.value)}></input>
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Solution</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="A programming language" onChange={event => setSolutionResult(event.target.value)}></input>
    </div>
    <div class="submissionButton">
      <button type="submit" class="btn btn-primary" onClick={submit}>Done</button>
    </div>
 </form>
 );

function setQuestionName(input) {
       setQuestion(input)
}

function setSolutionResult(input) {
       setSolution(input)
}

function submit() {
       var questionToCreate = {
                       id: 123,
                       question_data: 1,
                       question_text: question,
                       question_total_marks: 10,
                      quiz_id: 1,
               };
              QuizDataService.createQuestion(questionToCreate)
               .then(response => {
                       console.log(questionToCreate);
               })
               .catch(e => {
        console.log(e);
               });
}
 }
export default TextQuestion;
