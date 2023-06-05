import React, { useEffect, useState } from "react";
import Event from "../Event/Event";
import cl from "./Events.module.scss";
import { $api } from "../../http";

const Events = () => {
  const [events, setEvents] = useState(null);
  const getEvents = async () => {
    try {
      const { data } = await $api.get(`/event`);
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <section class={cl.events} id="events">
      <div className={`container ${cl.container}`}>
        <h1 class="h2">Наши события</h1>
        <div class={cl.boxContainer}>
          {events ? (
            events.map((event) => <Event event={event} />)
          ) : (
            <h1>Загрузка...</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
