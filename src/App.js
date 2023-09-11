import React from "react";
import ReactDOM  from "react-dom/client";
import Homepage from "./components/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Learning from "./components/Learning";

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
    }
])

root.render(
    <RouterProvider router={router} />
)