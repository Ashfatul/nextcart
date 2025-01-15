import { createBrowserRouter } from "react-router-dom";
import FrontEndLayout from "./src/components/FrontEndLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <FrontEndLayout/>,
        children: []
    }
])

export default router;