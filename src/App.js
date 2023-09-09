import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

root.render(
    <App />
)