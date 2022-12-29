// Import files to test here:
import TextQuestionAnswer from "../../components/TextQuestionAnswer";
import NumericalQuestionAnswer from "../../components/NumericalQuestionAnswer";
import MultipleSelectQuestionAnswer from "../../components/MultipleSelectQuestionAnswer";
import MultipleChoiceQuestionAnswer from "../../components/MultipleChoiceQuestionAnswer";

function UIPageTest() {
    return (
        <div>
            <label>Test UI Page</label>
            {/* Insert component/page to test here. */}
            <TextQuestionAnswer text="Here is a question"></TextQuestionAnswer>
            <NumericalQuestionAnswer text="What is the value of pi to two sig figs?"></NumericalQuestionAnswer>
            <MultipleSelectQuestionAnswer text="Which of of the following fruits is a citrus?|||orange, apple, peach, mango"></MultipleSelectQuestionAnswer>
            <MultipleChoiceQuestionAnswer text="Which of of the following fruits is a citrus?|||orange, apple, peach, mango"></MultipleChoiceQuestionAnswer>

        </div>
    );
}

export default UIPageTest;
