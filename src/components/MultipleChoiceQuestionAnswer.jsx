import React from 'react';
import ReactDOM from 'react-dom';
import RadioInput from './RadioInput.jsx'

class MultipleChoiceQuestionAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.text.split("|||")[0],
            selections: props.text.split("|||")[1].split(","),
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onInputChange(this.props.questionId, event);
    }

    render() {
        return (
            <div>
                <div class="form-group">
                    <label htmlFor="formGroupExampleInput">{this.state.question}</label>
                    <form id="multipleChoiceForm" >
                        {this.createSelectionElements()}
                    </form>
                </div>
            </div>
        );
    }

    createSelectionElements() {
        return this.state.selections.map((s) => {
            return(
                <RadioInput
                    key={s} 
                    questionId={this.props.questionId}
                    selection={s}
                    handleSelect={this.handleChange}
                />
            )
        });
    }
}

export default MultipleChoiceQuestionAnswer;
