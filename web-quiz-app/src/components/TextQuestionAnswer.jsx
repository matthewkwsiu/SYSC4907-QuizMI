import './css/TextQuestion.css'
import React from "react";

class TextQuestionAnswer extends React.Component {
    constructor(props){
        super(props);
    }
// function TextQuestionAnswer(props) {
    render(){
        return (
            <div>
                <div class="form-group">
                    <label for="formGroupExampleInput">{this.getQuestion(this.props)}</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""></input>
                </div>
                <div class="submitAnswer">
                    <button type="submit" class="btn btn-primary">Done</button>
                </div>
            </div>
        );
    }
    getQuestion(props) {
        return props.text;
    }
    
}



export default TextQuestionAnswer;
