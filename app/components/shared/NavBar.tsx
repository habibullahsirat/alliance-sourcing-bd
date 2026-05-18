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
        <button
          className="bg-[linear-gradient(280.65deg,_#1F75FF_0%,_#61DAFF_55%,_#1F75FF_90%)]
         shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)]
         hover:bg-[linear-gradient(54.78deg,_#1F75FF_-17.46%,_#61DAFF_56.75%,_#1F75FF_103.97%)]
         hover:shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)]
         rounded-[8px]
         px-6 py-3
         text-white font-semibold
         transition-all duration-300
         hover:scale-[1.03]
         active:scale-[0.98]"
        >
          Speck with us
        </button>
      </div>
    </div>
  );
}
