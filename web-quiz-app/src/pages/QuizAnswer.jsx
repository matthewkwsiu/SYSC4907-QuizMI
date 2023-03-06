import HeaderStudent from "../components/HeaderStudent";
import QuizDataService from "../services/quiz.service";

import React from "react";
import TextQuestionAnswer from "../components/TextQuestionAnswer";
import MultipleSelectQuestionAnswer from "../components/MultipleSelectQuestionAnswer";
import NumericalQuestionAnswer from "../components/NumericalQuestionAnswer";
import MultipleChoiceQuestionAnswer from "../components/MultipleChoiceQuestionAnswer";
import Button from 'react-bootstrap/Button';

class QuizAnswer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            value: new Map()
        }


        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(questionId, newValue){
        this.setState({value: new Map(this.state.value.set(questionId, newValue))})
    }

    componentDidMount() {
        QuizDataService.getQuizQuestions(this.getQuizId())
            .then(response => {
                this.setState({ questions: (response.data) });
                this.state.questions.map((q) => {
                    this.setState({value: new Map(this.state.value.set(q.id, ''))})
                });
            })
            .catch(e => {
                console.log(e);
            });
        
    }

    render() {
        return (
            <div>
                <HeaderStudent></HeaderStudent>
                <h1>Quiz {this.getQuizId()} Questions</h1>
                {
                    this.createQuestions()
                }
                <Button onClick={this.submitResponses.bind(this)}>Submit</Button>
            </div>
        );
    }

    createQuestions() {
        return this.state.questions.map((q) => {
            if (q.question_data == 1) {
                return (
                    <NumericalQuestionAnswer key={q.id} text={q.question_text} />
                )
            } else if (q.question_data == 2) {
                return (
                    <MultipleChoiceQuestionAnswer key={q.id} text={q.question_text} />
                )
            } else if (q.question_data == 3) {
                return (
                    <MultipleSelectQuestionAnswer key={q.id} text={q.question_text} />
                )
            } else {
                return (
                    <TextQuestionAnswer 
                        key={q.id} 
                        questionId={q.id}
                        value={this.state.value.get(q.id)}
                        onInputChange={this.handleChange}
                        text={q.question_text} 
                    />
                )
            }
        });
    }

    getQuizId() {
        var currentUrl = window.location.href;
        var splitCurrentUrl = currentUrl.split("quizAnswer/");
        var currentId = splitCurrentUrl[1];
        return currentId;
    }

    getStudentId() {
        var studentID = localStorage.getItem('studentID');
        return studentID;
    }

    submitResponses() {
        const iterator1 = this.state.value.keys();
        for(let i = 0; i < this.state.value.size; i++){
            var k = iterator1.next().value;
            // console.log(k, this.state.value.get(k));
            this.sendResponsesToDatabase(k, this.state.value.get(k));
        }
    }

    sendResponsesToDatabase(questionId, responseData) {
            var studentResponse = {
                attempt_number: 1,
                response_data: responseData,
                grade_achieved: 0,
                student_id: this.getStudentId(),
                question_id: questionId, 
                quiz_id: this.getQuizId()
            };
            // console.log(studentResponse);

            QuizDataService.createResponse(studentResponse)
                .then(response => {
                    console.log("Created response: " + studentResponse.response_data);
                })
                .catch(e => {
                    console.log(e);
                });
    }
}

export default QuizAnswer;
