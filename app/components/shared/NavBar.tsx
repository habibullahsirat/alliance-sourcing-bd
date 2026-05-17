import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <div className="flex justify-between m-4 p-4">
      <div className="flex justify-start gap-2">
        <h2>Logo 1</h2>
        <h2>Logo 2</h2>
      </div>
      <div className="flex justify-between gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About US</NavLink>
        <NavLink to="/">Buying House</NavLink>
        <NavLink to="/">Factory & Machinery</NavLink>
        <NavLink to="/">Global Partners</NavLink>
      </div>
      <div>
        <button>Speak with us</button>
      </div>
    </div>
  );
}
