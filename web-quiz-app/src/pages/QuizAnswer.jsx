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
            value: ''
        }


        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(newValue){
        this.setState({value: newValue})
    }

    componentDidMount() {
        QuizDataService.getQuizQuestions(this.getId())
            .then(response => {
                this.setState({ questions: (response.data) });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <HeaderStudent></HeaderStudent>
                <h1>Quiz {this.getId()} Questions</h1>
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
                    <TextQuestionAnswer key={q.id} 
                    value={this.state.value}
                    onInputChange={this.handleChange}
                    text={q.question_text} />
                )
            }
        });
    }

    getId() {
        var currentUrl = window.location.href;
        var splitCurrentUrl = currentUrl.split("quizAnswer/");
        var currentId = splitCurrentUrl[1];
        return currentId;
    }

    submitResponses() {
        this.state.questions.map((q) => {
            console.log(q.id);
        });
        console.log(this.state.value);
    }
}

export default QuizAnswer;
