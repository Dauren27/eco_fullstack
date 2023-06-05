import React, { useState } from "react";
import cl from "../Events/EventsAdmin.module.scss";
import HeaderAdmin from "../Header/HeaderAdmin";
import {
  useGetNewsQuery,
  useCreateMutation,
  useDeleteNewsMutation,
} from "../../redux/reducers/newsApi";

const NewsAdmin = () => {
  const { data } = useGetNewsQuery();
  const [create, { isSuccess, isLoading, isError, error }] =
    useCreateMutation();
  const [deleteNews, {}] = useDeleteNewsMutation();
  const [state, setState] = useState({
    title: "",
    text: "",
    date: "",
    picture: null,
  });
  const submit = async () => {
    const formData = new FormData();
    formData.append("title", state.title);
    formData.append("text", state.text);
    formData.append("date", state.date);
    formData.append("picture", state.picture);
    create(formData);
  };
  return (
    <div className={cl.events}>
      <HeaderAdmin />
      <div className="container">
        <div className={cl.events__form}>
          <div className={cl.events__add}>
            <h2>Добавить новость</h2>
            <input
              type="text"
              autoComplete="new-password"
              placeholder="Заголовок"
              onChange={(e) => setState({ ...state, title: e.target.value })}
            />
            <input
              type="text"
              autoComplete="new-password"
              placeholder="Дата"
              onChange={(e) => setState({ ...state, date: e.target.value })}
            />
            <textarea
              autoComplete="new-password"
              placeholder="Текст"
              onChange={(e) => setState({ ...state, text: e.target.value })}
            />
            <input
              type="file"
              onChange={(e) => {
                setState({
                  ...state,
                  picture: e.target.files[0],
                });
              }}
            />

            {isError && <p className={cl.error}>{error?.data?.message}</p>}
            {isLoading && <p className={cl.loading}>Загрузка...</p>}
            {isSuccess && (
              <p className={cl.success}>Новость успешно добавлено</p>
            )}
            <button className="btn" onClick={() => submit()}>
              Добавить новость
            </button>
          </div>
        </div>
        <div className={cl.data}>
          {data &&
            data.map((item) => (
              <div className={cl.box}>
                <img src={`http://localhost:5050/${item.picture}`} alt="" />
                <div className={cl.content}>
                  <h3>{item.date}</h3>
                  <h3 className={cl.title}>{item.title}</h3>
                  <p>{item.text}</p>
                  <button
                    className="btn"
                    onClick={() => {
                      deleteNews(item._id);
                    }}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAdmin;
