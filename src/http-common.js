import axios from "axios"

export default axios.create({
	baseURL: "http://127.0.0.1:8080/",
    // baseURL: "https://sysc4907-quizmi.herokuapp.com/",
	headers: {
		"Content-type": "application/json"
	}
});
