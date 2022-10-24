import { useState } from 'react';

function MultipleSelectQuestion() {
	const [inputFields, setInputFields] = useState([
    {placeholder: '', choice: ''}
])

const addFields = () => {
	let newfield = { placeholder: '', choice: '' }
	setInputFields([...inputFields, newfield])
}
  return (
    <form>
	{inputFields.map((input, index) => {
		return (
		<>
      <div class="row">
        <div class="col">
          <input
			name="placeholder"
            type="text"
            class="form-control"
            placeholder="A) Apples"
			value={input.placeholder}
          ></input>
        </div>
        <div class="col">
          <div class="custom-control custom-checkbox">
            <input
			  name="choice"
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
			  value={input.choice}
            ></input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input
			name="placeholder"
            type="text"
            class="form-control"
            placeholder="B) Oranges"
			value={input.placeholder}
          ></input>
        </div>
        <div class="col">
          <div class="custom-control custom-checkbox">
            <input
			  name="choice"
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
			  value={input.choice}
            ></input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button onClick={addFields} type="submit" class="btn btn-primary">
            Add
          </button>
        </div>
      </div>
	  </>
	  )
	})}
    </form>
  );
}

export default MultipleSelectQuestion;
