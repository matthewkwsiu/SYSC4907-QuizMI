import HeaderStudent from "../components/HeaderInstructor";
import TextQuestionAnswer from "../components/TextQuestionAnswer";

function QuizAnswer() {
  return (
    <div>
        <HeaderStudent></HeaderStudent>
        
        {/* Insert quiz questions here */}
        <TextQuestionAnswer></TextQuestionAnswer>

        {/* Should have some way to submit all questions, rather than */}
        {/* submitting each one individually */}
    </div>
  );
}

export default QuizAnswer;
