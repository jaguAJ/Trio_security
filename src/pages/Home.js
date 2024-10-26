import React from "react";
import Hero from "../component/Hero.js";
import Wedo from "../component/Wedo.js";
import { YUs } from "../component/Yus.jsx";
import { Workflow } from "../component/Workflow.jsx";
import Tools from "../component/Tools.js";
import Subscribe from "../component/Subscribe.js";
import Footer from "../component/Footer.js";
import MainNavigation from "../component/MainNavigation.js";

const Home = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Hero />
        <Wedo />
        <YUs />
        <Workflow />
        <Tools />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Home;
