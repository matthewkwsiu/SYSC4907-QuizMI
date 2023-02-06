import HeaderStudent from "../components/HeaderStudent";
import QuizDataService from "../services/quiz.service";
import { useState, useEffect } from 'react';
import React from "react";
import TextQuestionAnswer from "../components/TextQuestionAnswer";

class QuizAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            questionsAdded: false, 
            children: []
        }
    }

    componentDidMount() {
        QuizDataService.getQuizQuestions(this.getId())
            .then(response => {
                this.setState({ questions: (response.data) });
            })
            .catch(e => {
                console.log(e);
            });
    }

    componentDidUpdate() {
        this.state.questions.forEach(function (q) {
            var para = new TextQuestionAnswer(q.question_text);
            // var para = document.createElement("p");
            // para.innerHTML = q.question_text;
            document.getElementById('questions-holder').appendChild(para);
            
        });
    }

    render() {
        return (
            <div>
                <HeaderStudent></HeaderStudent>
                <h1>Quiz {this.getId()} Questions</h1>
                <div id="questions-holder"></div>
                {this.props.children}
            </div>
        );
    }

    getId() {
        var currentUrl = window.location.href;
        var splitCurrentUrl = currentUrl.split("quizAnswer/");
        var currentId = splitCurrentUrl[1];
        return currentId;
    }
}

export default QuizAnswer;
