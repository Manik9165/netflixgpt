import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";

const Body = () =>{

    const routeProvider = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ]);

    return(
        <div>
            <RouterProvider router={routeProvider}/>
        </div>
    );
}

export default Body;