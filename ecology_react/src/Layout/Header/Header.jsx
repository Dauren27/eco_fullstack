import React from "react";
import cl from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <header className={cl.header}>
      <div className={`container ${cl.container}`}>
        <h1>
          <a className={cl.logo}>бишкек-эко</a>
        </h1>

        {/* <select name="language" className={cl.langSwitch}>
          <option value="russia">Русский</option>
          <option value="english">English</option>
          <option value="kyrgyz">Кыргызский</option>
        </select> */}

        <button
          className={cl.navOpenBtn}
          aria-label="Open Menu"
          data-nav-open-btn
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <nav className={cl.navbar} data-navbar>
          <button
            className={cl.navCloseBtn}
            aria-label="Close Menu"
            data-nav-close-btn
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <a href="#" className={cl.logo}>
            Бишкек-эко
          </a>

          <ul className={cl.navbarList}>
            <li>
              <Link to="/" className={cl.navbarLink}>
                <span>Главная</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/about" className={cl.navbarLink}>
                <span>О нас</span>

                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/news" className={cl.navbarLink}>
                <span>Новости</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/donate" className={cl.navbarLink}>
                <span>Пожертвования</span>

                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/events" className={cl.navbarLink}>
                <span>События</span>

                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/contacts" className={cl.navbarLink}>
                <span>Контакты</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={cl.headerAction}>
          {isAuth ? (
            <Link to="/profile">
              <button className="btn btn-primary">
                <span>Профиль</span>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">
                <span>Войти</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
