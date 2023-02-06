import React from 'react';
import QuizDataService from "../services/quiz.service";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false,
            name: "",
            username: "",
            password: "",
            isInstructor: true
        }
    }

    nameUpdate = (currentName) => {
        this.setState({
            name: currentName
        });
        console.log(this.state.name);
    }

    usernameUpdate = (currentUsername) => {
        this.setState({
            username: currentUsername
        });
        console.log(this.state.username);
    }

    passwordUpdate = (currentPassword) => {
        this.setState({
            password: currentPassword
        });
        console.log(this.state.password);
    }

    isInstructorUpdate = (isInstr) => {
        this.setState({
            isInstructor: isInstr
        });
    }

    createUser(name, username, password) {
        if (this.state.isInstructor) {
            var instructor = {
                instructor_name: name,
                instructor_username: username,
                instructor_password: password
            };
			localStorage.setItem("user", JSON.stringify(instructor.instructor_username))
            console.log(instructor.instructor_name)
            QuizDataService.createInstructor(instructor)
                .then(response => {
                    this.setState({ login: true }, () => {
                        window.location.href = '/quizControl';
                        console.log(this.state.login);
                    }); 
                    console.log("Created instructor" + instructor.instructor_name);
                })
                .catch(e => {
                    this.setState({login:false}, () => {
                        alert("Username is taken or a field was left blank")
                    });
                    console.log(e);
                });
        } else {
            var student = {
                student_name: name,
                student_username: username,
                student_password: password
            };
			localStorage.setItem("user", JSON.stringify(student.student_username))
            console.log(student.student_name)
            QuizDataService.createStudent(student)
                .then(response => {
                    this.setState({ login: true }, () => {
                        console.log("redirecting")
                        window.location.href = '/quizControl';
                        console.log(this.state.login);
                    }); 
                    console.log("Created student" + student.student_name);
                })
                .catch(e => {
                    this.setState({login:false}, () => {
                        alert("Username is taken or a field was left blank")
                    });
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
                    <input type="text" class="form-control" id="username" placeholder="Enter Username" onChange={(e) => this.usernameUpdate(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter Password" onChange={(e) => this.passwordUpdate(e.target.value)}/>
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
                <button class="btn btn-primary" onClick={this.createUser.bind(this, this.state.name, this.state.username, this.state.password, this.state.isInstructor)}>Submit</button>
            </div>
        );
    }
}

export default Login;
