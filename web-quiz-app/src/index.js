import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import QuizControl from './pages/QuizControl';
import DataRetrievalTest from './pages/TestPages/DataRetrievalTest';
import UIPageTest from './pages/TestPages/UIPageTest';
import Login from './pages/Login';
import EditQuiz from './pages/EditQuiz';

export default function Example() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="quizControl" element={<QuizControl/>} />
        <Route path="instructors" element={<DataRetrievalTest/>} />
        <Route path="testUI" element={<UIPageTest></UIPageTest>} />
		<Route path="login" element={<Login />} />
		<Route path="editQuiz" element={<EditQuiz />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);
