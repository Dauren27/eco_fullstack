import React from "react";
import Layout from "../../Layout/Layout";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Cta from "../../components/Cta";
import Services from "../../components/Services/Services";
import Events from "../../components/Events/Events";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Cta />
      <Services />
      <Events />
    </Layout>
  );
};

export default Home;
