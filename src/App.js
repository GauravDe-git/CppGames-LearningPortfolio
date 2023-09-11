import React from "react";
import ReactDOM  from "react-dom/client";
import Homepage from "./components/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Learning from "./components/Learning";
import Projects from "./components/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div>
            <Homepage/>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/learning",
        element: <Learning/>
    },
    {
        path: "/projects",
        element: <Projects/>
    }
])

root.render(
    <RouterProvider router={router} />
)