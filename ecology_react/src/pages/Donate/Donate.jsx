import React from "react";
import cl from "./Donate.module.scss";
import Layout from "../../Layout/Layout";
import Donate from "../../components/Donate";

const DonatePage = () => {
  return (
    <Layout>
      <div className={cl.donate}>
        <div className="container">
          <div className={cl.donate__content}>
            <h1>Пожертвования</h1>
            <Donate />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonatePage;
