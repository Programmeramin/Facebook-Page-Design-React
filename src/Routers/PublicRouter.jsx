// create publicRouter 

import Layout from "../Components/Layouts/Layout";
import Auth from "../Pages/Auth/Auth";
import Home from "../Pages/Home/Home";

const publicRouter = [
   
    {
        element : <Layout/>,
        children : [
            {
                path: "/",
                element : <Home/>
            },
        
            {
                path: "/auth",
                element : <Auth/>
            },
        ]
    }

];


// export
export default publicRouter;