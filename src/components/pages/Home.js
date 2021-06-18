import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import Nemeson from "../../assets/nemeson.png";
import nemesonOne from "../../assets/nemesonOne.png";
import nemesoHunt from "../../assets/nemesonHunt.png";
import nemesonH from "../../assets/nemesonH.png";
import nemeson1 from "../../assets/nemeson1.png";
import logo from "../../assets/logo.png";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero">
        <img className="fixedTitle" src={logo} alt="logo" />

        <section className="hero__one">
          <img src={nemesonOne} alt="nemesonOne" />
          <Link to="/nemesonOne" className="hero-link">
            <div className="hero__img">
              <img src={nemeson1} alt="nemeson" />
            </div>
          </Link>
          <Link to="/nemesonOne">Ver detalles</Link>
        </section>
        <section className="hero__hunt">
          <img src={nemesoHunt} alt="nemesonOne" />
          <Link to="/nemesonHunt" className="hero-link">
            <div className="hero__img">
              <img src={nemesonH} alt="nemeson" />
            </div>
          </Link>

          <Link to="/nemesonHunt">Ver detalles</Link>
        </section>
      </section>
    </>
  );
};

export default Home;
