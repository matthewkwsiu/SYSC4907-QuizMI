import './css/TextQuestion.css'
import React from "react";

class TextQuestionAnswer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div class="form-group">
                    <label for="formGroupExampleInput">{this.getQuestionText(this.props)}</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""></input>
                </div>
            </div>
        );
    }

    getQuestionText(props) {
        return props.text;
    }
}

export default TextQuestionAnswer;
