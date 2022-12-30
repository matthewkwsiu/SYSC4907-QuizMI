import './App.css';
import HeaderInstructor from "./components/HeaderInstructor";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    document.body.style = 'background: #282c34;';
    return (
        <div className="App" style={{ background: "black" }}>
            <div className="Header">
                <HeaderInstructor></HeaderInstructor>
            </div>
            <header className="App-header">
                <h1>QuizMI</h1>
                <p>Welcome to the QuizMI Home Page!</p>
                <p>
                    QuizMI is an web app with the goal of assisting instructors in teaching
                    students. The app allows interactive educational quizzes to be created,
                    which can be made up of questions with multiple formats, such as text,
                    numerical, multiple choice, and multiple select questions. These quizzes
                    can be helpful for improving engagement in classses and provide real-time
                    feedback on student understanding.
                </p>
            </header>
        </div>
    );
}

export default App;
