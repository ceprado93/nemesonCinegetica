import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Nemeson from "../../assets/nemeson.png";

const Home = () => {
  return (
    <section className="hero">
      <section className="hero__one">
        <p>Nemeson One</p>
        <img src={Nemeson} alt="nemeson" />
        <Link to="/nemesonOne">Ver detalles</Link>
      </section>
      <section className="hero__hunt">
        <p>Nemeson Hunt</p>
        <img src={Nemeson} alt="nemeson" />
        <Link to="/nemesonHunt">Ver detalles</Link>
      </section>
    </section>
  );
};

export default Home;
