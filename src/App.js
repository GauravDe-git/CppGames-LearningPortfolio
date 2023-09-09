import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello World</h1>
        </div>
    );
}

root.render(
    <App />
)