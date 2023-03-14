import { useState } from "react";
import "./css/MultipleSelect.css";

function MultipleSelectQuestion() {
  const [inputFields, setInputFields] = useState([
    { option: ""},
  ]);
  const [count, setCount] = useState(1)
  const addFields = () => {
	  if(count < 7) {
		let newfield = { option: ""};
		setInputFields([...inputFields, newfield]);
		setCount(count + 1)
	  }
	  else {
		  alert("Reached max questions!")
	  }
  };
  const removeFields = (index) => {
	  if(count > 1) {
		 let data = [...inputFields];
		 data.splice(index, 1)
		 setInputFields(data)
		 setCount(count - 1)
	  }
	  else {
		  alert("Cannot remove any more questions!")
	  }
  }
  const handleFormChange = (index, event) => {
	  let data = [...inputFields];
	  data[index][event.target.name]=event.target.value;
	  setInputFields(data);
  }
  return (
    <div className="MultipleSelect">
      <form>
        <div class="row">
          <div class="col">
            <label type="text">Question Title</label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingQuestion"
              ></input>
              <label for="floatingQuestion">Question</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label type="text">Choices</label>
          </div>
          <div class="col">
            <label type="text">Correct Response(s)</label>
          </div>
          <div class="col">
          </div>
        </div>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <div class="row">
                <div class="col">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="option"
                      id="floatingInput"
                      value={input.option}
					  onChange={event => handleFormChange(index, event)}
                    />
                    <label for="floatingInput">Answer</label>
                  </div>
                </div>
                <div class="col">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                  />
                </div>
                <div class="col">
                  <button type="button" class="btn btn-link" onClick={() => removeFields(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </form>
      <div class="submission">
        <button type="submit" class="btn btn-primary" onClick={addFields}>
          Add More..
        </button>
      </div>
    </div>
  );
}

export default MultipleSelectQuestion;
