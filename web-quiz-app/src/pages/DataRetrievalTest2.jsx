import QuizDataService from "../services/quiz.service";
import axios from "axios";
import {useEffect, useState} from "react";


function DataRetrievalTests() {
	const [students, setNewStudents] = useState([])
	
	function retrieveStudentList() {
	QuizDataService.getAllStudents()
      .then(response => {
        setNewStudents(response.data);
      })
      .catch(e => {
        console.log(e);
      });
	}
	
	useEffect(() => {
		retrieveStudentList();
	}, []);
	return(
	<>
	<div>
		<button type='button' class="btn btn-link" onClick={() => retrieveStudentList()}>Retrieve Students</button>
	</div>
	{students.map((students, index) => (
                    // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
                    <li key={index}>
                        <span>id: {students.id}</span>{" "}
                        <span>student_name: {students.student_name}</span>
                    </li>
                ))}
	</>
	);
	
}

export default DataRetrievalTests;
