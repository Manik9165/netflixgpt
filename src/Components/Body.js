import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
    const routeProvider = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    return (
        <div>
            <RouterProvider router={routeProvider} />
        </div>
    );
}

export default Body;