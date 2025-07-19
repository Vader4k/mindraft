import React from "react";
import { Link } from "react-router-dom";
import { sidebarLinks } from "../constants";
import { FiHome } from "react-icons/fi";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";

const Sidebar = () => {
  const location = useLocation();
  const active = "bg-blue-50 font-medium";
  const { user } = useUser();
  const {signOut} = useClerk();

  return (
    <aside className="h-screen flex flex-col sticky top-0 w-[280px] bg-white border-r border-midnight-200 pt-3">
      <div className="px-5 border-b pb-5 border-midnight-200">
        <Link to={"/"} className="w-full">
          <h2 className="text-xl font-semibold">
            Mind<span className="italic font-thin">raft</span>
          </h2>
        </Link>
      </div>
      <div className="px-3 py-5 flex flex-col">
        <span className="font-space-grotesk text-xs font-medium">
          Dashboard
        </span>
        <div className="mt-3">
          <Link
            to={"/dashboard"}
            className={`${
              location.pathname === "/dashboard" && active
            } flex items-center gap-2 py-2 px-3 rounded-md text-midnight-800 transition-all`}
          >
            <FiHome /> <p className="text-sm">Overview</p>
          </Link>
        </div>

        {/* tools */}
        <div className="mt-10 flex flex-col gap-2">
          <span className="text-xs font-medium font-space-grotesk">
            AI Tools
          </span>
          {sidebarLinks.map((link) => {
            const Icons = link.icon;
            return (
              <Link
                key={link.name}
                to={link.url}
                className={`${
                  location.pathname === link.url && active
                } flex py-2 px-3 items-center gap-2 text-midnight-800 transition-all`}
              >
                <Icons />
                <p className="text-sm font-inter">{link.name}</p>
              </Link>
            );
          })}
        </div>

        {/* setings */}
        <div className="mt-10">
          <span className="font-space-grotesk text-xs font-medium">
            Account
          </span>
          <div className="mt-3">
            <Link
              to={"/dashboard/settings"}
              className={`${
                location.pathname === "/dashboard/settings" && active
              } flex items-center gap-2 text-midnight-800 py-2 px-3 transition-all`}
            >
              <AiOutlineSetting /> <p className="text-sm">Settings</p>
            </Link>
          </div>
        </div>
      </div>
      {/* user profile */}
      <div className="mt-auto py-5 border-t border-midnight-200">
        <div className="px-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="size-[40px] object-cover rounded-full"
              src={user?.imageUrl}
              alt="profile pic"
            />

            <span>{user?.fullName}</span>
          </div>
          <button onClick={signOut}>
            <AiOutlineLogout />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
