import React from "react";
import cl from "./Project.module.scss";
import Layout from "../../Layout/Layout";
const AnimalProject = () => {
  return (
    <Layout>
      <div className={cl.project}>
        <div className="container">
          <div className={cl.project__content}>
            <h1>Защита животных</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnimalProject;
