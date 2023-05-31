import React from "react";
import cl from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer class={cl.footer}>
      <div class={`${"container"} ${cl.container}`}>
        <ul class={cl.footerList}>
          <li>
            <a href="#" class={cl.footerLink}>
              Условия использования
            </a>
          </li>

          <li>
            <a href="#" class={cl.footerLink}>
              Конфиденциальность и политика
            </a>
          </li>
        </ul>

        <p class={cl.copyright}>Copyright 2023 . Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
