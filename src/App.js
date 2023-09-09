import React from "react";
import ReactDOM  from "react-dom/client";
import Homepage from "./components/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div>
            <Homepage/>
        </div>
    );
}

root.render(
    <App />
)