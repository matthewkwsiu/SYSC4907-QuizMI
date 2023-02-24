import HeaderStudent from "../components/HeaderStudent";
import QuizDataService from "../services/quiz.service";

import React from "react";
import TextQuestionResponse from "../components/TextQuestionResponse";
import MultipleSelectQuestionAnswer from "../components/MultipleSelectQuestionAnswer";
import NumericalQuestionAnswer from "../components/NumericalQuestionAnswer";
import MultipleChoiceQuestionAnswer from "../components/MultipleChoiceQuestionAnswer";
import Button from 'react-bootstrap/Button';

class MyResponses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responses: []
        }
    }

    componentDidMount() {
        QuizDataService.getResponsesFromStudentID(this.getStudentId())
            .then(response => {
                this.setState({ responses: (response.data) });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <HeaderStudent></HeaderStudent>
                <h1>Student {this.getStudentId()} Responses</h1>
                {
                    this.createQuestions()
                }
            </div>
        );
    }

    createQuestions() {
        return this.state.responses.map((q) => {
            return (
                <TextQuestionResponse key={q.id} response_data={q.response_data} question_id={q.question_id}/>
            )
        });

    }

    getStudentId() {
        var studentID = localStorage.getItem('studentID');
        return studentID;
    }
}

export default MyResponses;
