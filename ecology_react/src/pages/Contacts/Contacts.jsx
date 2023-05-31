import React from "react";
import cl from "./Contacts.module.scss";
import Layout from "../../Layout/Layout";
import { BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";

const Contacts = () => {
  return (
    <Layout>
      <div className={cl.contacts}>
        <div className="container">
          <h1>Контакты</h1>
          <div className={cl.contacts__content}>
            <div className={cl.contacts__info}>
              <div className={cl.contacts__item}>
                <BsPhone />
                <h3>+996 702 271 103</h3>
              </div>
              <div className={cl.contacts__item}>
                <FiMail />
                <h3>bishkek_eko@gmail.com</h3>
              </div>
              <div className={cl.contacts__item}>
                <MdLocationOn />
                <h3>г. Бишкек, ул. Советская 452а</h3>
              </div>
              <div className={cl.contacts__socialNet}>
                <a href="https://www.instagram.com/"><AiOutlineInstagram /></a>
                <a href="https://ru-ru.facebook.com/"><FaFacebook /></a>
                <a href="https://www.youtube.com/"><AiFillYoutube /></a>
                <a href="https://web.telegram.org/z/"><FaTelegramPlane /></a>
              </div>
            </div>
            <div className={cl.contacts__img}>
              <img src="/images/flag2.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
