import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import DashNav from "../components/DashNav"

const Layout = () => {
  return (
    <div className="flex items-start">
      <Sidebar />
      <div>
        <DashNav/>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout