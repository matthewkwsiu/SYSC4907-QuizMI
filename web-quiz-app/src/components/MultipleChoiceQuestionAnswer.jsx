import React from 'react';
import ReactDOM from 'react-dom';
import RadioInput from './RadioInput.jsx'

class MultipleChoiceQuestionAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.text.split("|||")[0],
            selections: props.text.split("|||")[1].split(", "),
            questionElements: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // this.createSelectionElements(this.state.selections);
    }

    handleChange(event) {
        console.log("test");
        console.log(event)
        this.props.onInputChange(this.props.questionId, event);
    }

    render() {
        return (
            <div>
                <div class="form-group">
                    <label for="formGroupExampleInput">{this.state.question}</label>
                    <form id="multipleChoiceForm" >
                        {this.createSelectionElements(this.state.selections)}
                    </form>
                </div>
            </div>
        );
    }

    createSelectionElements(selections) {

        var select = document.getElementById("multipleChoiceForm");
        var input;
        var label;
    
        return this.state.selections.map((s) => {
            return(
                <RadioInput
                    // key={s.id} 
                    questionId={this.props.questionId}
                    selection={s}
                    handleSelect={this.handleChange}
                />
            )
        });


        for (var i = 0; i < selections.length; i++) {
            // select.appendChild(this.createLabel(selections[i]));
            // select.appendChild(this.createInput(selections[i]));
            // select.appendChild(document.createElement("br"))
            

            // input = document.createElement("input");
            // input.type = "radio";
            // input.name = "choice";
            // input.id = "choice" + selections[i] + i;
            // input.value = selections[i];
            // // input.setAttribute("onChange", function() {this.handleChange(this);});
            // // input.onChange = function(){this.handleChange(input.value);};
            // // input.onChange = function(){console.log("hello");};
            // input.setAttribute("onChange", 'this.handleChange.bind(this)');

            // // input.onclick = this.handleChange();
            
            // select.appendChild(input);
            // label = document.createElement("label");
            // label.innerHTML = selections[i];
            // label.htmlFor = "choice" + selections[i] + i;
            // select.appendChild(label);
            // select.appendChild(document.createElement("br"))

            this.setState(
                {questionElements: [...this.state.questionElements, this.createLabel(selections[i])]}
                )
            


        }
    }

    createLabel(selection){
        return (
            <div>
                <label for="formGroupExampleInput">{selection}</label>
                <input type="radio" value={selection} onChange={this.handleChange}></input>
                <br></br>
            </div>
            
        );
    } 
}

// function 

export default MultipleChoiceQuestionAnswer;
