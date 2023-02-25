import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>QuizMI</h1>
                <p>Welcome to the QuizMI Home Page!</p>
                <p>
                    QuizMI is an web app with the goal of assisting instructors in teaching
                    students by providing a tool to create interactive quizzes.
                </p>
                <p>
                    These quizzes can be helpful for improving engagement in classses and
                    provide real-time feedback on student understanding.
                </p>
                <Link to="/login" className="btn btn-primary">Login</Link>
            </header>
        </div>
    );
}

export default App;
