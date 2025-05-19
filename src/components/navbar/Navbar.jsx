import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-1 text-center items-center h-16">
      <ul className="flex justify-around w-full">
        <li
          className={`w-28 px-4 py-2 rounded-3xl text-white cursor-pointer
          ${isActive("/") ? "bg-sky-700" : "bg-sky-500 hover:bg-sky-700"}`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`w-28 px-4 py-2 rounded-3xl text-white cursor-pointer
          ${
            isActive("/contact") ? "bg-sky-700" : "bg-sky-500 hover:bg-sky-700"
          }`}
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          className={`w-28 px-4 py-2 rounded-3xl text-white cursor-pointer
          ${
            isActive("/gallery") ? "bg-sky-700" : "bg-sky-500 hover:bg-sky-700"
          }`}
        >
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
