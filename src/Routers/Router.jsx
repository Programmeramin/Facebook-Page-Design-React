import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./PublicRouter";
import privateRouter from "./PrivateRouter";


//create router
const router = createBrowserRouter([
    ...publicRouter, ...privateRouter
]);



//export
export default router;