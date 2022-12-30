import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function HeaderInstructor() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">QuizMI</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/quizControl" class="nav-link">Quiz Control</Link>
                    </li>
                </ul>
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Profile
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/login">My Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Switch Account</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
}
export default HeaderInstructor;