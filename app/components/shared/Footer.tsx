export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-16 font-sans">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
        {/* Left Column: Brand Info */}
        <div className="flex flex-col gap-6 max-w-md">
          {/* Logo & Company Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 shrink-0">
              <img
                src="../../../public/logo1.png"
                alt="Alliance Sourcing BD Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-bold tracking-wide text-sm leading-tight">
              <p>ALLIANCE</p>
              <p>SOURCING BD</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-sm mb-1 text-white">Address</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Asha Plaza (2nd floor), Hemayetpur, Savar, Dhaka, Bangladesh.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm mb-1 text-white">Contact</h3>
            <p className="text-gray-400 text-sm hover:underline cursor-pointer">
              01716054044
            </p>
            <p className="text-gray-400 text-sm hover:underline cursor-pointer">
              faroque71@gmail.com
            </p>
          </div>

          {/* Social Media Logos */}
          <div className="flex gap-4 items-center mt-2">
            {/* Facebook */}
            <a href="#" className="text-white hover:text-gray-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-white hover:text-gray-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm5 2.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm5.75-3.25a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
              </svg>
            </a>
            {/* X (formerly Twitter) */}
            <a href="#" className="text-white hover:text-gray-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M18.9 2H22l-6.8 7.78L23 22h-6.8l-5.3-6.9L4.9 22H2l7.3-8.34L1 2h6.9l4.8 6.3L18.9 2zm-1.2 18h1.9L6.2 3.9H4.2L17.7 20z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-white hover:text-gray-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96zM3 9h4v12H3zm7 0h3.8v1.71h.05c.53-1 1.82-2.06 3.75-2.06C21 8.65 22 10.6 22 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="text-white hover:text-gray-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Quick Links */}
        <div className="flex flex-col items-end w-full md:w-auto text-right gap-4">
          <h3 className="text-lg tracking-wide font-normal mb-2 text-white">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">
              About us
            </a>
            <a href="#" className="hover:text-white transition">
              Our services
            </a>
            <a href="#" className="hover:text-white transition">
              Factory network
            </a>
            <a href="#" className="hover:text-white transition">
              Quality control
            </a>
            <a href="#" className="hover:text-white transition">
              Contact us
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-gray-800 my-8 max-w-7xl mx-auto" />

      {/* Bottom Section: Copyright & Legal */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <div>
          <p>&copy; 2026 Alliance Sourcing BD</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="underline hover:text-white transition">
            Privacy policy
          </a>
          <a href="#" className="underline hover:text-white transition">
            Terms of service
          </a>
          <a href="#" className="underline hover:text-white transition">
            Cookie settings
          </a>
        </div>
      </div>
    </footer>
  );
}
// /* Button */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 14px 22px;
// gap: 10px;

// width: 144px;
// height: 47px;

// background: linear-gradient(280.65deg, #1F75FF 0%, #61DAFF 55%, #1F75FF 90%);
// box-shadow: 0px 0px 20px rgba(71, 184, 255, 0.5), 0px 5px 5px -1px rgba(58, 125, 233, 0.25), inset 4px 4px 8px rgba(175, 230, 255, 0.5), inset -4px -4px 8px rgba(19, 95, 216, 0.35);
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// -------------------------
// Hovering effect
/* Property 1=Variant2 */

/* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 14px 22px;
// gap: 10px;

// position: absolute;
// width: 129px;
// height: 47px;
// left: 20px;
// top: 87px;

// background: linear-gradient(54.78deg, #1F75FF -17.46%, #61DAFF 56.75%, #1F75FF 103.97%);
// box-shadow: 0px 0px 20px rgba(71, 184, 255, 0.5), 0px 5px 5px -1px rgba(58, 125, 233, 0.25), inset 4px 4px 8px rgba(175, 230, 255, 0.5), inset -4px -4px 8px rgba(19, 95, 216, 0.35);
// border-radius: 8px;
