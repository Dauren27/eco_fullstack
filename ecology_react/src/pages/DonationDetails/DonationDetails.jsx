import React from "react";
import cl from "./DonationDetails.module.scss";
import Layout from "../../Layout/Layout";

const DonationDetails = () => {
  return (
    <Layout>
      <div className={cl.donation}>
        <div className="container">
          <div className={cl.donation__content}>
            <h1>Наши реквизиты</h1>
            <div className={cl.donation__details}>
              <h2>
                Для юр. лица просим сделать перевод на банковский счёт фонда
              </h2>
              <hr />
              <h3>
                <span>Получатель: </span>Экологический фонд "Бишкек-Эко"
              </h3>
              <h3>
                <span>ИНН: </span>927112003846
              </h3>
              <h3>
                <span>Адрес: </span>г. Бишкек, ул. Совесткая 452а
              </h3>
              <h3>
                <span>Номер телефона: </span>+996 702 271 103
              </h3>

              <h3>
                <span>Расчётный счёт: </span> 9417 6098 9918 0076
              </h3>
              <h3>
                <span>Назначение платежа: </span>Пожертвование №
              </h3>
              <hr />
              <h2>
                Экологический фонд "Бишкек-Эко" выражает искренюю благодарность
                за вашу помощь
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonationDetails;
