import {
  LayoutGrid,
  UserRoundPen,
  Settings,
  ClipboardPlus,
} from "lucide-react";
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Link } from "react-router"; 

//Themes
import Theme from "../ui/Themes";

const SIDEBAR_ITEMS = [
  { id: 1, name: "Dashborad", icon: LayoutGrid, href: "/dashborad" },
  { id: 2, name: "Appointments", icon: ClipboardPlus, href: "/appointments" },
  { id: 3, name: "Patients", icon: UserRoundPen, href: "/patients" },
  { id: 4, name: "Settings", icon: Settings, href: "/settings" },
];

const Sidebar = () => {

  const location = useLocation();

  return (
    <div className="w-[272px] h-  bg-base-100 rounded-bl-4xl rounded-tl-4xl">
      <div className="flex justify-center items-center mt-6">
        <a href="/">
          <img src={Logo} alt="cure-hub-Logo" />
        </a>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = location.pathname === item.href || location.pathname.startsWith(item.href);
          return (
            <Link key={item.href} to={item.href}>
              <div
                className={`flex items-center p-4 text-sm cursor-pointer  transition-colors
                  ${isActive ? "bg-blue-100 text-secondary font-bold border-r-4" : "text-primary hover:bg-gray-100"}
                `}
              >
                <span className="ml-5">
                  <item.icon size={24}  />
                </span>
                <span className="ml-3 flex">
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
          {/* // Dark mode toggle */}
          <div>
            <Theme />
          </div>
        
      </div>
    </div>
  );
};
export default Sidebar;