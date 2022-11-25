import QuizDataService from "../services/quiz.service";
import axios from "axios";
import {useState} from "react";


function DataRetrievalTest() {
	const [instructors, setNewInstructors] = useState([])
	return(
	<>
	<div>
		<button type='button' class="btn btn-link" onClick={() => retrieveInstructorList()}>Retrieve Instructors</button>
		<button type='button' class="btn btn-link" onClick={() => getJSONResult()}>Print Instructors</button>
		</div>
		</>
	);
	
	function getJSONResult() {
		let instructor = JSON.parse(instructors)
		console.log(instructor.id)
	}
	
	function retrieveInstructorList() {
	QuizDataService.getAllInstructors()
      .then(response => {
        setNewInstructors(response.data);
		console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

	  console.log(instructors[0].id);
	  console.log(instructors[0].instructor_name);
	}
	
}

export default DataRetrievalTest;