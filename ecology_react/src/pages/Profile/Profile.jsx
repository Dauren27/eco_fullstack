import React from "react";
import cl from "./Profile.module.scss";
import Layout from "../../Layout/Layout";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../redux/reducers/authApi";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuth } = useSelector((state) => state.auth);
  const [logout, { isLoading }] = useLogoutMutation();

  return (
    <Layout>
      <div className={cl.profile}>
        <div className="container">
          <div className={cl.profile__content}>
            {isAuth ? (
              <>
                <h1>Профиль</h1>
                {!isLoading ? (
                  <>
                    <div className={cl.profile__info}>
                      <div className={cl.circle}>
                        <FaUserAlt />
                      </div>
                      <div className={cl.profile__text}>
                        <h3>
                          <span>Имя пользователя: </span>
                          {user && user.username}
                        </h3>
                        <h3>
                          <span>Логин: </span>
                          {user && user.email}
                        </h3>

                        {isAuth && user.email == "Admin" && (
                          <Link to="/admin/news">Админка</Link>
                        )}
                        <button onClick={() => logout()}>Выйти</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <h1>Загрузка...</h1>
                )}
              </>
            ) : (
              <h1>Вам необходмимо авторизоваться для просмотра профиля</h1>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
