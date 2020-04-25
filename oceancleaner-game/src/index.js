import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuizView from "./components2/QuizView";

ReactDOM.render(
    <React.StrictMode>
        <div className="App">
            <QuizView></QuizView>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

