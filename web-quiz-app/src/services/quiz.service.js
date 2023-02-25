import http from "../http-common";

class QuizDataService {
    getAllInstructors() {
        return http.get("/instructors");
    }
    getAllStudents() {
        return http.get("/students");
    }
    createQuestion(question) {
        return http.post("/questions", question);
    }
    getQuizQuestions(quizID){
        return http.get("questions/quiz/" + quizID)
    }
    getQuiz(quizID) {
        return http.get("/quizzes/" + quizID);
    }
    createQuiz(quiz) {
        return http.post("/quizzes", quiz);
    }
    updateQuiz(quizID, quiz){
        return http.put("/quizzes/" + quizID);
    }
    getInstructorQuizzes(instructorID) {
		return http.get("/quizzes/instructor/" + instructorID)
	}
    createInstructor(instructor) {
        return http.post("/instructors", instructor);
    }
    createStudent(student) {
        return http.post("/students", student);
    }
}

export default new QuizDataService();
