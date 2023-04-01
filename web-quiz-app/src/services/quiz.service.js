import http from "../http-common";

class QuizDataService {
	getAllInstructors() {
		return http.get("/instructors");
	}
	getAllStudents() {
		return http.get("/students");
	}
    getStudentFromID(studentID) {
        return http.get("students/" + studentID);
    }
    getStudentFromUsername(username) {
        return http.get("students/username/" + username);
    }
	createQuestion(question) {
		return http.post("/questions", question);
	}
    updateQuestion(questionID, question) {
        return http.put("/questions/" + questionID, question)
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
    getInstructorID(instructor_username) {
        return http.get("/instructors/" + instructor_username);
    }
    crossCheckQuizID(quiz_name, instructor_username) {
        return http.get("/quizzes/crossCheck/" + quiz_name + "/" + instructor_username)
    }
    getResponsesFromStudentID(studentID) {
        return http.get("responses/student/" + studentID)
    }
    getResponsesFromQuizID(quizID) {
        return http.get("responses/quiz/" + quizID)
    }
    createResponse(response){
        return http.post("/responses", response);
    }
    changeQuizActivity(quizID) {
        return http.put("quizzes/active/" + quizID)
    }
    getQuiz(quizID) {
        return http.get("quizzes/active/" + quizID)
    }
}

export default new QuizDataService();
