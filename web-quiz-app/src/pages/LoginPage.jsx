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
            window.location.href = '/quizControl';
        } else {
            var student = {
                student_name: name
            };
			localStorage.setItem("user", JSON.stringify(student.student_name))
            console.log(student.student_name)
            console.log("redirecting");
            window.location.href = '/joinQuiz';
        }
    }

    render() {
        return (
            <div>
                <h1>Create New User</h1>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name" onChange={(e) => this.nameUpdate(e.target.value)}></input>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter Username" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter Password" />
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
