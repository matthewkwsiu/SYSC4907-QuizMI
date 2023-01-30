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
    getQuiz(quizID) {
        return http.get("/quizzes/" + quizID);
    }
    createQuiz(quiz) {
        return http.post("/quizzes", quiz);
    }
    updateQuiz(quizID, quiz){
        return http.put("/quizzes/" + quizID);
    }
    createInstructor(instructor) {
        return http.post("/instructors", instructor);
    }
}

export default new QuizDataService();
