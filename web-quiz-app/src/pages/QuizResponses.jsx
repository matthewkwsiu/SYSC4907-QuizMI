import QuizDataService from "../services/quiz.service";
import React from "react";
import TextQuestionQuizResponse from "../components/TextQuestionQuizResponse";

class MyResponses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responses: []
        }
    }

    componentDidMount() {
        QuizDataService.getResponsesFromQuizID(this.props.quiz_id)
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
                <h1>Quiz {this.props.quiz_id} Responses</h1>
                {
                    this.retrieveResponses()
                }
            </div>
        );
    }

    retrieveResponses() {
        return this.state.responses.map((q) => {
            return (
                <TextQuestionQuizResponse key={q.id} response_data={q.response_data} question_id={q.question_id} student_id={q.student_id}/>
            )
        });

    }
}

export default MyResponses;
