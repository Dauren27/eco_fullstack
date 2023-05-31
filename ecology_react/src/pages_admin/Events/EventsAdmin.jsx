import React, { useEffect, useState } from "react";
import cl from "./EventsAdmin.module.scss";
import HeaderAdmin from "../Header/HeaderAdmin";
import {
  useCreateMutation,
  useDeleteEventMutation,
  useGetEventsQuery,
  useLazyGetEventsQuery,
} from "../../redux/reducers/eventApi";

const EventsAdmin = () => {
  const { data } = useGetEventsQuery();
  const [create, { isSuccess, isLoading, isError, error }] =
    useCreateMutation();
  const [deleteEvent, {}] = useDeleteEventMutation();
  const [state, setState] = useState({
    title: "",
    text: "",
    date: "",
    time: "",
    address: "",
  });

  return (
    <div className={cl.events}>
      <HeaderAdmin />
      <div className="container">
        <div className={cl.events__form}>
          <div className={cl.events__add}>
            <h2>Добавить событие</h2>
            <input
              type="text"
              autoComplete="new-password"
              placeholder="Заголовок"
              onChange={(e) => setState({ ...state, title: e.target.value })}
            />

            <input
              autoComplete="new-password"
              placeholder="Время"
              onChange={(e) => setState({ ...state, time: e.target.value })}
            />
            <input
              type="text"
              autoComplete="new-password"
              placeholder="Дата"
              onChange={(e) => setState({ ...state, date: e.target.value })}
            />
            <input
              type="text"
              autoComplete="new-password"
              placeholder="Адрес"
              onChange={(e) => setState({ ...state, address: e.target.value })}
            />
            <textarea
              autoComplete="new-password"
              placeholder="Текст"
              onChange={(e) => setState({ ...state, text: e.target.value })}
            />
            {isError && <p className={cl.error}>{error?.data?.message}</p>}
            {isLoading && <p className={cl.loading}>Загрузка...</p>}
            {isSuccess && (
              <p className={cl.success}>Событие успешно добавлено</p>
            )}
            <button className="btn" onClick={() => create(state)}>
              Добавить событие
            </button>
          </div>
        </div>
        <div className={cl.data}>
          {data &&
            data.map((item) => (
              <div className={cl.box}>
                <img src="/images/event6.jpg" alt="" />
                <div className={cl.content}>
                  <h3>
                    {item.date} / {item.time}
                  </h3>
                  <h3 className={cl.title}>{item.title}</h3>
                  <p>{item.text}</p>
                  <button
                    className="btn"
                    onClick={() => {
                      deleteEvent(item._id);
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

export default EventsAdmin;
