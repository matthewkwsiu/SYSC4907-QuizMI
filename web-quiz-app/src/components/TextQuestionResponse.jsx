import './css/TextQuestion.css'
import React from "react";
import QuizDataService from "../services/quiz.service";

class TextQuestionResponse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questionText: "",
            solutionText: ""
        }
    }

    componentDidMount() {
        QuizDataService.getQuestion(this.props.question_id)
            .then(response => {
                var text = response.data.question_text;
                var editedText = text.split("|||");
                this.setState({ questionText: editedText[0] });
                this.setState({ solutionText: response.data.question_solution});
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
                    <br></br>
                    <label for="">{this.state.solutionText}</label>
                </div>
            </div>
        );
    }

    getResponseData(props) {
        return props.response_data;
    }
}

export default TextQuestionResponse;
