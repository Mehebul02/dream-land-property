import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);
  export default router