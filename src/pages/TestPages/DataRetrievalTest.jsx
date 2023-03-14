import QuizDataService from "../../services/quiz.service";
import axios from "axios";
import {useEffect, useState} from "react";


function DataRetrievalTest() {
	const [instructors, setNewInstructors] = useState([])
	
	function retrieveInstructorList() {
	QuizDataService.getAllInstructors()
      .then(response => {
        setNewInstructors(response.data);
      })
      .catch(e => {
        console.log(e);
      });
	}
	
	useEffect(() => {
		retrieveInstructorList();
	}, []);
	return(
	<>
	<div>
		<button type='button' class="btn btn-link" onClick={() => retrieveInstructorList()}>Retrieve Instructors</button>
	</div>
	{instructors.map((instructors, index) => (
                    // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
                    <li key={index}>
                        <span>id: {instructors.id}</span>{" "}
                        <span>instructor_name: {instructors.instructor_name}</span>
                    </li>
                ))}
	</>
	);
	
}

export default DataRetrievalTest;
