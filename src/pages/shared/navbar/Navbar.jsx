import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo-3.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { ScaleLoader } from "react-spinners";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(console.log("Log Out Successfully"))
      .catch((error) => {
        console.log(error);
      });
  };

  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-red-600" : ""
        }
      >
        <li className="text-xl font-poppins text-white ">Home</li>
      </NavLink>



      <NavLink
        to="/update"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-red-600" : ""
        }
      >
        <li className="text-xl font-poppins text-white ">Update Profile</li>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-red-600" : ""
        }
      >
        <li className="text-xl font-poppins text-white ">Contact US</li>
      </NavLink>
    </>
  );
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ScaleLoader color="#36a5d6" height={100} radius={9} width={20} />
      </div>
    );
  }
  return (
    <div className="navbar bg-[#0284C7] md:px-14  ">
      <div className="flex-1">
        <img className=" md:max-w-36" src={logo} alt="" />
      </div>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0284C7] rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1  gap-10">{navLink}</ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          ></div>
        </div>

        {user ? (
          <>
            {" "}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    <h1>{user.displayName}</h1>
                  </a>
                </li>
              </ul>
            </div>
            <button
              onClick={handleLogOut}
              className="bg-yellow-500 px-4 py-2 rounded-md text-black text-xl font-semibold font-poppins hover:bg-gray-300 "
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="bg-yellow-500 px-4 py-2 rounded-md text-black text-xl font-semibold font-poppins hover:bg-gray-300 ">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
