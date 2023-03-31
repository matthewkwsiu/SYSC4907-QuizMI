import React from 'react';
import QuizDataService from "../services/quiz.service";

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            isInstructor: true
        }
    }
    nameUpdate = (currentName) => {
        this.setState({
            name: currentName
        });
    }
    isInstructorUpdate = (isInstr) => {
        this.setState({
            isInstructor: isInstr
        });
    }

    createUser(name) {
        if (this.state.isInstructor) {
            var instructor = {
                instructor_name: name
            };
			localStorage.setItem("user", JSON.stringify(instructor.instructor_name))
            console.log(instructor.instructor_name)
            QuizDataService.getInstructorID(instructor.instructor_name)
            .then(response => {
                console.log("Logged in with instructor " + response.data);
                window.location.href = '/quizControl';
            })
            .catch(e => {
                console.log(e);
                alert("Username is invalid");
            });
            
        } else {
            var student = {
                student_name: name
            };
			localStorage.setItem("user", JSON.stringify(student.student_name))
            console.log(student.student_name)
            QuizDataService.getStudentFromUsername(student.student_name)
                .then(response => {
                    console.log("Logged in with student " + response.data.id);
                    localStorage.setItem("studentID", JSON.stringify(response.data.id))
                    console.log("redirecting");
                    window.location.href = '/joinQuiz';
                })
                .catch(e => {
                    console.log(e);
                    alert("Username is invalid");
                });
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name" onChange={(e) => this.nameUpdate(e.target.value)}></input>
                </div>
                <div class="form-group">
                    <label>User Type</label><br></br>
                    <label for="Instructor">
                        <input type="radio"
                            id="isInstructor"
                            value="true"
                            checked={this.state.isInstructor}
                            onChange={() => this.isInstructorUpdate(true)} />
                        Instructor
                    </label><br></br>
                    <label for="Student">
                        <input
                            type="radio"
                            id="isStudent"
                            value="false"
                            checked={!this.state.isInstructor}
                            onChange={() => this.isInstructorUpdate(false)} />
                        Student
                    </label><br></br>
                </div>
                <button class="btn btn-primary" onClick={this.createUser.bind(this, this.state.name, this.state.isInstructor)}>Login</button>
            </div>
        );
    }
}

export default LoginPage;
