import http from "../http-common";

class QuizDataService {
	getAllInstructors() {
		return http.get("/instructors");
	}
	getAllStudents() {
		return http.get("/students");
	}
    getStudentFromUsername(username){
        return http.get("students/username/" + username);
    }
	createQuestion(question) {
		return http.post("/questions", question);
	}
    getQuestion(questionID) {
        return http.get("/questions/" + questionID);
    }
    getQuizQuestions(quizID){
        return http.get("questions/quiz/" + quizID)
    }
	createQuiz(quiz) {
		return http.post("/quizzes", quiz);
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
    getResponsesFromStudentID(studentID){
        return http.get("responses/student/" + studentID)
    }
}

export default new QuizDataService();
