import React, { useEffect, useState } from "react";
import cl from "./News.module.scss";
import Layout from "../../Layout/Layout";
import { $api } from "../../http";

const News = () => {
  const [news, setNews] = useState(null);
  const getNews = async () => {
    try {
      const { data } = await $api.get(`/news`);
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <Layout>
      <div className={cl.news}>
        <div className="container">
          <div className={cl.news__content}>
            <h1>Новости</h1>
            <div className={cl.news__container}>
              {news &&
                news.map((item) => (
                  <div className={cl.box}>
                    <img src="/images/news.jpg" alt="" />
                    <div className={cl.content}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
