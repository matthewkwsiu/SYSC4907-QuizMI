import http from "../http-common";

class QuizDataService {
	getAllInstructors() {
		return http.get("/instructors");
	}
	getAllStudents() {
		return http.get("/students");
	}
}

export default new QuizDataService();
