import { useState } from "react";
import "./css/MultipleSelect.css";

function MultipleSelectQuestion() {
  const addFields = () => {
    let newfield = { placeholder: "", choice: "" };
    setInputFields([...inputFields, newfield]);
  };
  const [inputFields, setInputFields] = useState([
    { option: "", realAnswer: "" },
  ]);
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
                      value={input.name}
                    />
                    <label for="floatingInput">Answer</label>
                  </div>
                </div>
                <div class="col">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    value={input.realAnswer}
                  />
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
