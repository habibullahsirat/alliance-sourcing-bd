import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <div className="flex justify-between m-4 ml-10">
      <div className="flex justify-start gap-2">
        <div className="w-10 overflow-hidden shrink-0">
          <img
            src="../../../public/logo1.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="font-bold mx-2">
          <p>ALLIANCE</p>
          <p>SOURCING BD</p>
        </div>
        <div className="w-50 overflow-hidden shrink-0 mt-2">
          <img src="../../../public/logo2.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between gap-8 p-2 font-normal">
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
        <button className="rounded-[8px] border-blue-600 px-6 py-3 bg-gradient-to-r from-[#1F75FF] via-[#61DAFF] to-[#1F75FF] text-white shadow-lg shadow-blue-600/50 hover:bg-gradient-to-t from-blue-600 via-white to-blue-600 shadow-blue-600/80 transition duration-300">
          Speck with us
        </button>
      </div>
    </div>
  );
}

// Font color: #0C0804
