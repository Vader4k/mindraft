import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const { user } = useUser();

  console.log(user)

  if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <SignIn  routing="path" path="/sign-in"/>
      </div>
    );
  }

  return (
    <div className="flex items-start min-h-screen">
      <Sidebar />
      <div className="py-10 px-6 min-h-screen h-full w-full bg-blue-50/50">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
