import './css/NumericalQuestion.css'
function NumericalQuestion() {
return(
<form>
   <div class="form-group">
      <label for="formGroupExampleInput">Question Title</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="What is the max value of a 32-bit signed int?"></input>
   </div>
   <div class="form-group">
      <label for="formGroupExampleInput2">Solution</label>
      <input type="number" step="any" class="form-control" id="formGroupExampleInput2" placeholder="2147483647"></input>
   </div>
   <div class="submissionButton">
      <button type="submit" class="btn btn-primary">Done</button>
   </div>
</form>
);
}
export default NumericalQuestion;
