import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxInput from './CheckboxInput';

class MultipleSelectQuestionAnswer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question: props.text.split("|||")[0],
            selections: props.text.split("|||")[1].split(","),
            selectionMap: this.createSelectionMap()
        }
        this.handleChange = this.handleChange.bind(this);
    }

    createSelectionMap() {
        var selectionOptions = this.props.text.split("|||")[1].split(",");
        return new Map(selectionOptions.map((s) =>[s, false]));
    }

    handleChange(value, checked) {
        this.setState({selectionMap: this.state.selectionMap.set(value, checked)});
        this.props.onInputChange(this.props.questionId, this.generateUpdate());
    }

    generateUpdate(){
        var updateString = "";
        this.state.selectionMap.forEach((value, key)=>{
            if(value){
                updateString = updateString.concat(key, ",");
            }
        });
        updateString = updateString.slice(0, -1);
        return updateString;
    }

    render() {
        return (
            <div>
                <div class="form-group">
                    <label for="formGroupExampleInput">{this.state.question}</label>
                    <form id="multipleSelectForm">
                        {this.createSelectionElements()}
                    </form>
                </div>
            </div>
        );
    }

    createSelectionElements() {
        return this.state.selections.map((s) => {
            return(
                <CheckboxInput
                    key={s} 
                    questionId={this.props.questionId}
                    selection={s}
                    handleSelect={this.handleChange}
                />
            )
        });
    }
}

export default MultipleSelectQuestionAnswer;
