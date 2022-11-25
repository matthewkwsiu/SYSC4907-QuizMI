import QuizDataService from "../services/quiz.service";
import axios from "axios";
import {useState} from "react";


function DataRetrievalTest() {
	const [instructors, setNewInstructors] = useState([])
	return(
	<>
		<div>
			<button type='button' class="btn btn-link" onClick={() => retrieveInstructorList()}>Retrieve Instructors</button>
		</div>
		
		{instructors.map((instructors, index) => {
        return (
          <div key={index}>
            <h2>id: {instructors.id}</h2>
            <h2>instructor_name: {instructors.instructor_name}</h2>

            <hr />
          </div>
        );
      })}
	</>
	);
	
	function retrieveInstructorList() {
	QuizDataService.getAllInstructors()
      .then(response => {
        setNewInstructors({
          instructors: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
	}
}

export default DataRetrievalTest;