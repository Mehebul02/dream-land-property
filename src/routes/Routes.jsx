import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/shared/login/Login";
import Register from "../pages/shared/register/Register";
import ErrorPage from "../pages/error/ErrorPage";

import UpdateProfile from "../pages/shared/updateprofile/UpdateProfile";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import PropertyDetails from "../pages/shared/Details/PropertyDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home/>,
            loader:()=> fetch('/propertyInfo.json'),
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/update',
          element:<PrivateRoutes><UpdateProfile/></PrivateRoutes>
        },
        {
          path:'/details/:id',
          loader:()=>fetch('/propertyInfo.json'),
          element:<PrivateRoutes><PropertyDetails/></PrivateRoutes>,
        }
        
      ]
    },
  ]);
  export default router