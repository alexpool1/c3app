import { useRouter } from "next/router";
import { useState } from "react";
import Image from "./Image";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <nav className="bg-white border-b border-gray-300 h-16 flex items-center justify-between px-4">
      <div
        className="hover:cursor-pointer ml-4 h-auto w-28 justify-self-start"
        onClick={() => handleNavLinkClick("/")}>
        <Image src="/logos/nav-logo.png" alt="C3forMe Logo" />
      </div>

      <ul className="hidden min-[1000px]:flex space-x-8 mr-4">
        <li className="mr-4 cursor-pointer" onClick={() => handleNavLinkClick("/dashboard")}>
          Dashboard
        </li>
        <li className="mr-4 cursor-pointer" onClick={() => handleNavLinkClick("/cards")}>
          Conversation Cue Cards
        </li>
        <li className="mr-4 cursor-pointer" onClick={() => handleNavLinkClick("/deck")}>
          My Dialogue Deck
        </li>
        <li className="mr-4 cursor-pointer" onClick={() => handleNavLinkClick("/activities")}>
          Extension Activities
        </li>
      </ul>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
          <div className="flex flex-col justify-start py-8 px-4 space-y-6">
            <button
              className="text-gray-600 hover:text-gray-800 self-end text-2xl mr-4"
              onClick={handleMobileMenuToggle}
            >
              <i className="fas fa-times"></i>
            </button>
            <ul className="flex flex-col space-y-4">
              <li
                className="cursor-pointer text-lg text-gray-600 hover:text-gray-800"
                onClick={() => handleNavLinkClick("/dashboard")}
              >
                Dashboard
              </li>
              <li
                className="cursor-pointer text-lg text-gray-600 hover:text-gray-800"
                onClick={() => handleNavLinkClick("/cards")}
              >
                Conversation Cue Cards
              </li>
              <li
                className="cursor-pointer text-lg text-gray-600 hover:text-gray-800"
                onClick={() => handleNavLinkClick("/deck")}
              >
                My Dialogue Deck
              </li>
              <li
                className="cursor-pointer text-lg text-gray-600 hover:text-gray-800"
                onClick={() => handleNavLinkClick("/activities")}
              >
                Extension Activities
              </li>
            </ul>
          </div>
        </div>
      )}

      <button
        className="hamburger min-[1000px]:hidden focus:outline-none text-2xl mr-4"
        onClick={handleMobileMenuToggle}
      >
        <i className="fas fa-bars"></i>
        
      </button>
    </nav>
  );
};

export default Navbar;
