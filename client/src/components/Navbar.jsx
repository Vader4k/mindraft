import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { user } = useUser();

  const { openSignIn } = useClerk();

  return (
    <header className="bg-transparent sticky top-0 z-20 backdrop-blur-sm">
      <nav className="w-full py-3 bg-transparent px-3 md:max-w-[86%] mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="font-inter text-xl flex-1">
          <span className="font-semibold">Mind</span>
          <span className="italic font-light">raft</span>
        </div>
        {/* links */}
        <div className="hidden lg:flex items-center gap-10 justify-center text-sm capitalize font-space-grotesk flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="text-gray-600 hover:text-midnight transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* dahboard */}

        <div className="flex-1 flex justify-end">
          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={openSignIn}
              className="text-sm px-10 py-2 rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-200 text-white"
            >
              Get Started
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
