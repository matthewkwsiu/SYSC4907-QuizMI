import React from 'react';

class CheckboxInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleSelect(event.target.value, event.target.checked);
    }

    render() {
        return (
            <div>
                <input type="checkbox" value={this.props.selection} onChange={this.handleChange} name={this.props.questionId}></input>
                <label htmlFor="formGroupExampleInput">{this.props.selection}</label>
                <br></br>
            </div>
        );
    }
}

export default CheckboxInput;
