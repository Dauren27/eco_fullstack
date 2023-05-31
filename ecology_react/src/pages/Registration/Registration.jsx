import React, { useEffect, useState } from "react";
import cl from "../Login/Login.module.scss";
import Layout from "../../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../redux/reducers/authApi";
import { useSelector } from "react-redux";

const Registration = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const [state, setState] = useState({
    username: "",
    login: "",
    password: "",
    password_two: "",
  });
  const [passwordMatches, setPasswordMatches] = useState(true);
  const [registration, { isError, error, isSuccess, isLoading }] =
    useRegistrationMutation();

  const registrationHandler = () => {
    if (state.password === state.password_two) {
      registration(state);
      setPasswordMatches(true);
    } else {
      setPasswordMatches(false);
    }
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  });
  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess]);
  return (
    <Layout>
      <div className={cl.login}>
        <div className={cl.login__form}>
          <h2>Регистрация</h2>
          <input
            type="text"
            placeholder="Имя пользователя"
            autoComplete="new-password"
            onChange={(e) => setState({ ...state, username: e.target.value })}
          />
          <input
            type="text"
            placeholder="Логин"
            autoComplete="new-password"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Подтвердите пароль"
            autoComplete="new-password"
            onChange={(e) =>
              setState({ ...state, password_two: e.target.value })
            }
          />
          {isError && <p className={cl.error}>{error.data.message}</p>}
          {!passwordMatches && <p className={cl.error}>Пароди не совпадают</p>}
          {isLoading && <p className={cl.loading}>Загрузка...</p>}
          {isSuccess && (
            <p className={cl.success}>Вы успешно зарегестрированы</p>
          )}
          <button
            className="btn"
            onClick={() => {
              registrationHandler();
            }}
          >
            Войти
          </button>
          <div className={cl.link}>
            <span>
              Уже есть аккаунт? <br />
            </span>
            <Link to="/login">Войти</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
