import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function HeaderStudent() {
  return (
    <Navbar bg="light">
    <a class="navbar-brand" href="#">QuizMI</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
            <Link to="/joinQuiz" class="nav-link">Join Quiz</Link>
        </li>
        <li class="nav-item">
            <Link to="/myResponses" class="nav-link">My Responses</Link>
        </li>
      </ul>
    </div>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={logoutUser}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Navbar>
  );

  function logoutUser() {
    localStorage.clear();
    window.location.href = '/';
  }
}

export default HeaderStudent;
