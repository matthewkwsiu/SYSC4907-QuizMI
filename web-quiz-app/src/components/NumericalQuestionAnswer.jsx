import './css/NumericalQuestion.css'

function NumericalQuestion() {
   return(
      <form>
         <div class="form-group">
            <label for="formGroupExampleInput">QUESTION TO BE ADDED</label>
            <input type="number" step="any" class="form-control" id="formGroupExampleInput2" placeholder=""></input>
         </div>
         <div class="submissionButton">
            <button type="submit" class="btn btn-primary">Done</button>
         </div>
      </form>
   );
}
export default NumericalQuestion;
