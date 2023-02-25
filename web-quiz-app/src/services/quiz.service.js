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
        return http.get("/quizzes/" + quiz_name + "/" + instructor_username)
    }

}

export default new QuizDataService();
