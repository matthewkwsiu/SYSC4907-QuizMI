import './css/TextQuestion.css'
import React from "react";
import QuizDataService from "../services/quiz.service";

class TextQuestionResponse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questionText: ""
        }
    }

    componentDidMount() {
        QuizDataService.getQuestion(this.props.question_id)
            .then(response => {
                this.setState({ questionText: response.data.question_text });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render(){
        return (
            <div>
                <div class="form-group">
                    <label for="">{this.state.questionText}</label>
                    <br></br>
                    <label for="">{this.getResponseData(this.props)}</label>
                </div>
            </div>
        );
    }

    getResponseData(props) {
        return props.response_data;
    }
}

export default TextQuestionResponse;
