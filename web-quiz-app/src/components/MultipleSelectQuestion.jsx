function MultipleSelectQuestion {
}

function ChoiceAndResponse {
	return(
	<form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="A) Apples">
	  <input type="text" class="form-control" placeholder="B) Oranges">
	  <div class="submit">
		<button type="button" class="btn btn-primary">Add</button>
	  </div>
    </div>
    <div class="col">
      <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></input>
	  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option2" aria-label="..."></input>
    </div>
  </div>
</form>
	);
}

function createNewOptions() {
}

export default MultipleSelectQuestion;