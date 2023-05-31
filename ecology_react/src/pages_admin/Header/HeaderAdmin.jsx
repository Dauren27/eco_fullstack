import React from "react";
import cl from "./Header.module.scss";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <header className={cl.header}>
      <nav className={cl.navbar}>
        <Link to="/admin/events" className={cl.navbarLink}>
          <span>События</span>
        </Link>
        <Link to="/admin/news" className={cl.navbarLink}>
          <span>Новости</span>
          
        </Link>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
