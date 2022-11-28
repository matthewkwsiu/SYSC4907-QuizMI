import QuizDataService from "../services/quiz.service";
import axios from "axios";
import {useEffect, useState} from "react";


function DataRetrievalTest() {
	const [instructors, setNewInstructors] = useState([])
	return(
	<>
	<div>
		<button type='button' class="btn btn-link" onClick={() => retrieveInstructorList()}>Retrieve Instructors</button>
		</div>
		</>
	);

	function retrieveInstructorList() {		
		QuizDataService.getAllInstructors()
		.then(response => {
				setNewInstructors(response.data);
				console.log(response.data);
		})
		.catch(e => {
			console.log(e);
		}).finally(()=>{
			console.log(instructors);
		console.log(instructors[0].id);
		console.log(instructors[0].instructor_name);
			
		});

	}
	function printSomething(){
		console.log(instructors);
		console.log(instructors[0].id);
		console.log(instructors[0].instructor_name);
	}
	
}

export default DataRetrievalTest;
