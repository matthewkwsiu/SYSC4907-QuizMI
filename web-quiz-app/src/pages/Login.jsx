import React from 'react';
import QuizDataService from "../services/quiz.service";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false,
            name: "",
            isInstructor: true
        }
    }
    nameUpdate = (currentName) => {
        this.setState({
            name: currentName
        });
        console.log(this.state.name);
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
            QuizDataService.createInstructor(instructor)
                .then(response => {
                    console.log("Created instructor" + instructor.instructor_name);
                })
                .catch(e => {
                    console.log(e);
                });
            window.location.href = '/quizControl';
        } else {
            var student = {
                student_name: name
            };
			localStorage.setItem("user", JSON.stringify(student.student_name))
            console.log(student.student_name)
            QuizDataService.createStudent(student)
                .then(response => {
                    
                })
                .catch(e => {
                    console.log(e);
                });
            console.log("Created student" + student.student_name);
            QuizDataService.getStudentFromUsername(student.student_name)
                .then(response => {
                    console.log("Created student" + response.data.id);
                    localStorage.setItem("studentID", JSON.stringify(response.data.id))
                    console.log("redirecting");
                    window.location.href = '/joinQuiz';
                })
                .catch(e => {
                    console.log(e);
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
                <button class="btn btn-primary" onClick={this.createUser.bind(this, this.state.name, this.state.isInstructor)}>Submit</button>
            </div>
        );
    }
}

export default Login;
