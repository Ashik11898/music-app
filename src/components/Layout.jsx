import React,{useState} from "react";
import { PUBLIC_ROUTES } from "../utils/navbar_constants";
import { NavMenu } from "./minicomponents/atom";

const Layout = ({ children }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (id, event) => {
    event.stopPropagation();  // Prevent event propagation to parent elements
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the current menu
    }));
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <NavMenu routes={PUBLIC_ROUTES} openMenus={openMenus} toggleMenu={toggleMenu} />
      </aside>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
