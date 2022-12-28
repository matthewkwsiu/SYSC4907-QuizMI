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
	createQuiz(quiz) {
		return http.post("/quiz", quiz);
	}
}

export default new QuizDataService();
