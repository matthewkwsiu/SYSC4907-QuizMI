import React from 'react';
import QuizDataService from "../services/quiz.service";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false,
            name: ""
        }
    }
    nameUpdate = (currentName) => {
        this.setState({
            name: currentName
        });
        console.log(this.state.name);
    }

    createUser(name) {
        var instructor = {
            instructor_name: name
        };
        console.log(instructor.instructor_name)
        QuizDataService.createInstructor(instructor)
            .then(response => {
                console.log("Created instructor" + instructor.instructor_name);
            })
            .catch(e => {
                console.log(e);
            });
    }
    render() {
        return (
            <form action="/quizControl">
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
                <button type="submit" class="btn btn-primary" onClick={this.createUser.bind(this, this.state.name)}>Submit</button>
            </form>
        );
    }
}

export default Login;