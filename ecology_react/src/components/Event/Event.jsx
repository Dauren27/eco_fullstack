import React from "react";
import cl from "./Event.module.scss";
import { Link, useNavigate } from "react-router-dom";
const Event = ({ event }) => {
  const navigate = useNavigate();
  return (
    <div className={cl.box}>
      <img src="/images/event6.jpg" alt="" />
      <div className={cl.content}>
        <h3>
          {event.date} / {event.time}
        </h3>
        <h3 onClick={() => navigate(`/events/${event._id}`)} className={cl.title}>
          {event.title}
        </h3>
        {/* <p>{event.text}</p> */}
        <button onClick={() => navigate(`/events/${event._id}`)} className="btn">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default Event;
