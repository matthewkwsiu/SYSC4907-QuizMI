import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import EditQuiz from './pages/EditQuiz';
import ErrorPage from './error-page';
import QuizControl from './pages/QuizControl';
import DataRetrievalTest from './pages/TestPages/DataRetrievalTest';

export default function Example() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="quizControl" element={<QuizControl/>} />
        <Route path="instructors" element={<DataRetrievalTest/>} />
        <Route path="*" element={<ErrorPage />} />
		<Route path="editQuiz" element={<EditQuiz/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);
