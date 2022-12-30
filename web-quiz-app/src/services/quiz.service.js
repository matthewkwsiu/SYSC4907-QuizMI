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
		return http.post("/quizzes", quiz);
	}
	createInstructor(instructor) {
		return http.post("/instructors", instructor);
	}
}

export default new QuizDataService();
