import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative ">
      <div className=" bg-white flex w-full flex-1 text-center items-center h-24 fixed z-20">
        <ul className="flex justify-around w-full">
          <li>
            <Link
              to="/"
              className={`block w-28 px-4 py-2 rounded-3xl text-white cursor-pointer
        ${
          isActive("/")
            ? "bg-violet-700 ring-2 ring-violet-700 ring-offset-2"
            : "bg-violet-500 hover:bg-violet-600"
        }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block w-28 px-4 py-2 rounded-3xl text-white cursor-pointer
        ${
          isActive("/contact")
            ? "bg-violet-700 ring-2 ring-violet-700 ring-offset-2"
            : "bg-violet-500 hover:bg-violet-700"
        }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`block w-28 px-4 py-2 rounded-3xl text-white cursor-pointer
        ${
          isActive("/gallery")
            ? "bg-violet-700 ring-2 ring-violet-700 ring-offset-2"
            : "bg-violet-500 hover:bg-violet-700"
        }`}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
