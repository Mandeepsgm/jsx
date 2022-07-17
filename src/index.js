//importReact and ReactDOm libraries
import React from "react";
import ReactDOM  from "react-dom/client";

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    return (
        <div>
            <h1> Hi There! </h1>
            <input maxLength={5}
                spellCheck 
                placeholder="Enter text here"
                style={{
                    border: '3px solid red'
                }}
                autoFocus
            >
            </input>
        </div>
    );
}

root.render(<App />);