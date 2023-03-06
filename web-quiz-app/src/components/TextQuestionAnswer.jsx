import './css/TextQuestion.css'
import React from "react";

class TextQuestionAnswer extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onInputChange(this.props.questionId, event.target.value);
    }

    render(){
        return (
            <div>
                <div class="form-group">
                    <label for="formGroupExampleInput">{this.getQuestionText(this.props)}</label>
                    <input type="text" value={this.props.value} onChange={this.handleChange} class="form-control" id="formGroupExampleInput"></input>
                </div>
            </div>
        );
    }

    getQuestionText(props) {
        return props.text;
    }
}

export default TextQuestionAnswer;
