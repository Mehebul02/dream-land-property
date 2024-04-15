import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className=" flex justify-center items-center h-screen">
          <div>
          <p className="text-7xl font-bold">404</p>
      <p>
        <i className="text-2xl">{error.statusText || error.message}</i>
      </p>
        <Link to='/'><button className="btn mt-5 bg-[#0284C7]">Back To Home</button></Link>
          </div>
        </div>
    );
};

export default ErrorPage;