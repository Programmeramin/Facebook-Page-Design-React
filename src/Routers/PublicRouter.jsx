// create publicRouter 

import Auth from "../Pages/Auth/Auth";
import Home from "../Pages/Home/Home";

const publicRouter = [
    {
        path: "/",
        element : <Home/>
    },

    {
        path: "/auth",
        element : <Auth/>
    },

];


// export
export default publicRouter;