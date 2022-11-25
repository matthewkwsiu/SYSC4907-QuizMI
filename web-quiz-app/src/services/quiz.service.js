import http from "../http-common";

class QuizDataService {
	getAllInstructors() {
		return http.get("/instructors");
	}
}

export default new QuizDataService();