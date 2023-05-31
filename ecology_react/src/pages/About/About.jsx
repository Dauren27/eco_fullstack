import React from "react";
import cl from "./About.module.scss";
import Layout from "../../Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className={cl.about}>
        <div className="container">
          <div className={cl.about__content}>
            <h1>О нас</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
