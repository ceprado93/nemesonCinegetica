import Nemeson from "../../assets/nemeson.png";
import { useLayoutEffect, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useParams } from "react-router-dom";
import nemesonOne from "../../assets/nemesonOne.png";
import nemeson1 from "../../assets/nemeson1.png";
import logo from "../../assets/logo.png";
import llave from "../../assets/llave.svg";
import vol from "../../assets/vol.svg";
import ruido from "../../assets/ruido.svg";

const NemesonOne = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();
  const { fetchAllProducts, fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2Mzk2ODkzMzQ5OTM=");
    return () => {};
  }, [fetchProductWithId, id]);

  function click(event) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }
  return (
    <>
      {/* <section className="nemeson">
        <Link to="/" className="arrowContainer"></Link>
        <img id="logo" className="fixedTitle" src={logo} alt="logo" />
        <div className="nemeson__title">
          <img className="One__title" src={nemesonOne} alt="nemesonOne" />
        </div>
        <div className="nemeson__div">
          <div className="nemeson__img">
            <div className="hero__img">
              <img src={nemeson1} alt="nemeson" />
            </div>
          </div>
          <div className="nemeson__desc">
            <p>
              Nemeson One es un dispositivo inteligente de ultima generación que permite una recuperación auditiva de
              hasta un 75% a traves de un amplificador por frecuencias que lo posiciona como un referente en el mercado
              audiológico.
            </p>
            <p>
              Nemeson One ofrece toda una serie de ventajas sobre los dispositivos que actualmente hay en el mercado y
              que fundamentan la recuperación auditiva en amplificadores lineales no superiores al 65% y que pueden
              dañar al oido.
            </p>

            <p style={{ fontSize: 30, fontWeight: "bold" }}>
              <span style={{ marginRight: 15 }}>990€ </span> 890€
            </p>
            <button onClick={(e) => click(e)}>Comprar</button>
          </div>
        </div>
      </section> */}
      <section className="nemeson">
        <Link to="/" className="arrowContainer"></Link>
        <img id="logo" className="fixedTitle" src={logo} alt="logo" />
        <div className="nemeson__title">
          <img className="One__title" src={nemesonOne} alt="nemesonOne" />
        </div>
        <div className="nemeson__div">
          <div className="nemeson__img">
            <div className="hero__img">
              <img src={nemeson1} alt="nemeson" />
            </div>
          </div>
          <div className="nemeson__desc">
            <p>
              Nemeson One es un dispositivo inteligente de última generación que permite una recuperación auditiva de
              hasta un 75% a través de un amplificador por frecuencias que lo posiciona como un referente en el mercado
              audiológico.
            </p>

            <div className="article__div">
              <article>
                <img src={llave} />
                <p>+ 3 millones de perfiles auditivos analizados</p>
              </article>
              <article>
                <img src={vol} />
                <p>Control de volumen personalizado</p>
              </article>
              <article>
                <img src={ruido} />
                <p>Evita aislarse del entorno</p>
              </article>
            </div>

            <p style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
              <span style={{ marginRight: 15 }}>990€ </span> 890€
            </p>
            <button onClick={(e) => click(e)}>Comprar</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NemesonOne;
