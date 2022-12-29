import React from 'react';
import ReactDOM from 'react-dom';

class MultipleSelectQuestionAnswer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question: props.text.split("|||")[0],
            selections: props.text.split("|||")[1].split(", ")
        }
    }
    componentDidMount() {
        createSelectionElements(this.state.selections);
    }
    render() {
        return (
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">{this.state.question}</label>
                    <form id="multipleChoiceForm">
                    </form>
                </div>
                <div class="submissionButton">
                    <button type="submit" class="btn btn-primary">Done</button>
                </div>
            </form>
        );
    }
}

function createSelectionElements(selections) {

    var select = document.getElementById("multipleChoiceForm");
    var input;
    var label;

    for (var i = 0; i < selections.length; i++) {
        input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.id = "choice" + selections[i] + i;
        select.appendChild(input);
        label = document.createElement("label");
        label.innerHTML = selections[i];
        label.htmlFor = "choice" + selections[i] + i;
        select.appendChild(label);
        select.appendChild(document.createElement("br"))
    }
}

export default MultipleSelectQuestionAnswer;
