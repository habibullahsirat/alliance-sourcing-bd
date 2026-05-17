import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <div className="flex justify-between m-4">
      <div className="flex justify-start gap-2 p-2">
        <h2>Logo 1</h2>
        <h2>Logo 2</h2>
      </div>
      <div className="flex justify-between gap-8 p-2">
        <NavLink to="/" className="text-lg">
          Home
        </NavLink>
        <NavLink to="/" className="text-lg">
          About US
        </NavLink>
        <NavLink to="/" className="text-lg">
          Buying House
        </NavLink>
        <NavLink to="/" className="text-lg">
          Factory & Machinery
        </NavLink>
        <NavLink to="/" className="text-lg">
          Global Partners
        </NavLink>
      </div>
      <div>
        <button className="rounded-[10px] border-blue-600 p-2 bg-gradient-to-r from-blue-600 via-white to-blue-600 text-white shadow-lg shadow-blue-600/50 hover:shadow-blue-600/80 transition duration-300">
          Speak with us
        </button>
      </div>
    </div>
  );
}
