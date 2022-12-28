

function MultipleSelectQuestionAnswer(props) {
   return(
      <form>
         <div class="form-group">
            <label for="formGroupExampleInput">{getQuestion(props)}</label>
            <form id="selectElementId">
            </form>
            {createSelectionElements(getSelections(props))}
         </div>
         <div class="submissionButton">
            <button type="submit" class="btn btn-primary">Done</button>
         </div>
      </form>
   );
}

function getQuestion(props){
   return props.text.split("|||")[0];
}

function getSelections(props){
    return props.text.split("|||")[1].split(", ");
}

function createSelectionElements(selections){

    var select = document.getElementById("selectElementId");
    for(var i=0; i<selections.length; i++){
        var input = document.createElement("input");
        input.type = "checkbox";
        var label = document.createElement("label");
        label.innerHTML = selections[i];
        select.appendChild(input);
        select.appendChild(label);
    }

}




export default MultipleSelectQuestionAnswer;
