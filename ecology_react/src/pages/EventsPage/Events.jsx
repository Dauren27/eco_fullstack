import React from "react";
import Layout from "../../Layout/Layout";
import Events from "../../components/Events/Events";
import cl from "./Events.module.scss";

const EventsPage = () => {
  return (
    <Layout>
      <div className={cl.events}>
        <Events />
      </div>
    </Layout>
  );
};

export default EventsPage;
