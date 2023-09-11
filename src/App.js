import React from "react";
import ReactDOM  from "react-dom/client";
import Homepage from "./components/Homepage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Learning from "./components/Learning";
import Projects from "./components/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
}

root.render(<App />);
