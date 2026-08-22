import { useState } from "react";
import { NavLink } from "react-router";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/buyinghouse", label: "Buying House" },
    { to: "/factory", label: "Factory & Machinery" },
    { to: "/partners", label: "Global Partners" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Section (Logos & Brand) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 sm:w-10 shrink-0">
            <img
              src="/logo1.png"
              alt="Logo 1"
              className="w-full object-contain"
            />
          </div>

          <div className="font-bold text-xs sm:text-sm leading-tight text-gray-900">
            <p>ALLIANCE</p>
            <p>SOURCING BD</p>
          </div>

          {/* Hidden on small phones to prevent header clutter */}
          <div className="hidden xs:block w-32 sm:w-40 md:w-48 shrink-0 mt-0.5">
            <img
              src="/logo2.png"
              alt="Logo 2"
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Middle Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-normal">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-base xl:text-lg transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right Button (Desktop) */}
        <div className="hidden lg:block">
          <button
            type="button"
            className="
              bg-[linear-gradient(280.65deg,_#1F75FF_0%,_#61DAFF_55%,_#1F75FF_90%)]
              shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)]
              hover:bg-[linear-gradient(54.78deg,_#1F75FF_-17.46%,_#61DAFF_56.75%,_#1F75FF_103.97%)]
              rounded-lg px-5 xl:px-6 py-2.5 xl:py-3
              text-white text-sm xl:text-base font-semibold
              transition-all duration-300
              hover:scale-[1.03] active:scale-[0.98]
            "
          >
            Speak with us
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 pt-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-3 pb-4 border-t border-gray-100 pt-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base py-2 px-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="pt-2">
            <button
              type="button"
              className="
                w-full
                bg-[linear-gradient(280.65deg,_#1F75FF_0%,_#61DAFF_55%,_#1F75FF_90%)]
                shadow-[0px_0px_20px_rgba(71,184,255,0.5)]
                rounded-lg px-6 py-3
                text-white font-semibold text-center
                transition-all duration-300
                active:scale-[0.98]
              "
            >
              Speak with us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
