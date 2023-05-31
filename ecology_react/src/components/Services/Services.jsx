import React from "react";
import cl from "./Services.module.scss";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className={cl.project}>
      <h1 className="h2">Наши проекты</h1>

      <div class={cl.boxContainer}>
        <Link to="/projects/tree">
          <div class={cl.box}>
            <img src="/images/project-1.jpg" alt="" />
            <h3 className={cl.title}>Посадка деревьев</h3>
          </div>
        </Link>

        <Link to="/projects/animal">
          <div class={cl.box}>
            <img src="/images/project-3.jpg" alt="" />
            <h3 className={cl.title}>Защита живоных</h3>
          </div>
        </Link>
        <Link to="/projects/garbage">
          <div class={cl.box}>
            <img src="/images/project-4.jpg" alt="" />
            <h3 className={cl.title}>Переработка мусора</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
