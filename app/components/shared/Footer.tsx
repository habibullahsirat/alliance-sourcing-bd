export default function Footer() {
  return (
    <footer className="bg-black mt-30 text-white">
      <div className="flex justify-between gap-50 mx-10">
        <div>
          <div className="flex">
            <div className="w-10 overflow-hidden shrink-0">
              <img
                src="../../../public/logo1.png"
                alt=""
                className="w-full object-cover mt-1"
              />
            </div>
            <div className="font-bold mx-2">
              <p>ALLIANCE</p>
              <p>SOURCING BD</p>
            </div>
          </div>
          <h3>Address</h3>
          <p>Asha Plaza (2nd floor), Hemayetpur, Savar, Dhaka, Bangladesh.</p>
          <br />
          <br />
          <h3>Contact</h3>
          <p>01716054044</p>
          <p>faroque71@gmail.com</p>
          {/* Logos */}
          <div className="flex gap-2 overflow-hidden shrink-0">
            {/* Facebook */}
            <div>
              <a href="#" className="text-white hover:opacity-70 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12" />
                </svg>
              </a>
            </div>
            {/* Instagram */}
            <div>
              <a href="#" className="text-white hover:opacity-70 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path
                    d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 
                      5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 
                      3 3v10c0 1.65-1.35 3-3 3H7c-1.65 
                      0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm5 
                      2.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 
                      6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 
                      12 8.5zm5.75-3.25a1.25 1.25 0 1 0 1.25 1.25 
                      1.25 1.25 0 0 0-1.25-1.25z"
                  />
                </svg>
              </a>
            </div>
            {/* X */}
            <div>
              <a href="#" className="text-white hover:opacity-70 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path
                    d="M18.9 2H22l-6.8 7.78L23 22h-6.8l-5.3-6.9L4.9 
      22H2l7.3-8.34L1 2h6.9l4.8 6.3L18.9 
      2zm-1.2 18h1.9L6.2 3.9H4.2L17.7 20z"
                  />
                </svg>
              </a>
            </div>
            {/* LinkedIn */}
            <div>
              <a href="#" className="text-white hover:opacity-70 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path
                    d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 
      2.48 0 0 0-.02-4.96zM3 9h4v12H3zm7 
      0h3.8v1.71h.05c.53-1 1.82-2.06 
      3.75-2.06C21 8.65 22 10.6 22 
      14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 
      0-2.3 1.56-2.3 3.17V21h-4z"
                  />
                </svg>
              </a>
            </div>
            {/* Youtube */}
            <div>
              <a href="#" className="text-white hover:opacity-70 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path
                    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 
      3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 
      6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 
      .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 
      9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 
      31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 
      15.5v-7l6.5 3.5-6.5 3.5z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <p>&copy; 2026 Alliance Sourcing BD</p>
        </div>

        <div className="flex flex-col h-100">
          <div className="text-right">
            <h3>Quick Links</h3>
            <p>About Us</p>
            <p>Our Services</p>
            <p>Factory Network</p>
            <p>Quality Control</p>
            <p>Contact Us</p>
          </div>
          <div className="flex justify-between gap-3 my-auto">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of services</a>
            <a href="#">Cookies settngs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
