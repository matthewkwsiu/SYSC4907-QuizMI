import './css/TextQuestion.css'
import React from "react";
import QuizDataService from "../services/quiz.service";

class TextQuestionQuizResponse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questionText: "",
            studentName: ""
        }
    }

    componentDidMount() {
        QuizDataService.getQuestion(this.props.question_id)
            .then(response => {
                var text = response.data.question_text;
                var editedText = text.split("|||");
                this.setState({ questionText: editedText[0] });
            })
            .catch(e => {
                console.log(e);
            });
        QuizDataService.getStudentFromID(this.props.student_id)
            .then(response => {
                this.setState({ studentName: response.data.student_name });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render(){
        return (
            <div>
                <div class="form-group">
                    <label for="">Student: {this.state.studentName}</label>
                    <br></br>
                    <label for="">Question: {this.state.questionText}</label>
                    <br></br>
                    <label for="">Response: {this.getResponseData(this.props)}</label>
                </div>
            </div>
        );
    }

    getResponseData(props) {
        return props.response_data;
    }
}

export default TextQuestionQuizResponse;
