import React, { useState, useEffect } from "react";
import cl from "./Login.module.scss";
import Layout from "../../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { authApi, useLoginMutation } from "../../redux/reducers/authApi";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [login, { isError, error, isSuccess, isLoading, data }] =
    useLoginMutation();
  const [refresh, {}] = authApi.endpoints.refresh.useLazyQuery();
  const { isAuth } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async () => {
    await login({ email, password });
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  });
  useEffect(() => {
    if (isSuccess) {
      refresh();
      navigate("/profile");
    }
  }, [isSuccess]);
  return (
    <Layout>
      <div className={cl.login}>
        <div className={cl.login__form}>
          <h2>Войти</h2>
          <input
            type="text"
            placeholder="Логин"
            autoComplete="new-password"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {isError && <p className={cl.error}>{error?.data?.message}</p>}
          {isLoading && <p className={cl.loading}>Загрузка...</p>}
          {isSuccess && <p className={cl.success}>Вы успешно авторизовались</p>}
          <button className="btn" onClick={loginHandler}>
            Войти
          </button>
          <div className={cl.link}>
            <span>
              Ещё нет аккаунта? <br />
            </span>
            <Link to="/registration">Регистрация</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
