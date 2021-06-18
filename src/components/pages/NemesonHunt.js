import { useLayoutEffect, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useParams } from "react-router-dom";
import nemesonHunt from "../../assets/nemesonHunt.png";
import nemesonH from "../../assets/nemesonH.png";
import logo from "../../assets/logo.png";
import llave from "../../assets/llave.svg";
import vol from "../../assets/vol.svg";
import ruido from "../../assets/ruido.svg";

const NemesonHunt = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();
  const { fetchAllProducts, fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2Mzk2ODk0MDA1Mjk=");
    return () => {};
  }, [fetchProductWithId, id]);

  function click(event) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }
  return (
    <>
      <section className="nemeson">
        <Link to="/" className="arrowContainer"></Link>
        <img id="logo" className="fixedTitle" src={logo} alt="logo" />
        <div className="nemeson__title">
          <img className="One__title" src={nemesonHunt} alt="nemesonOne" />
        </div>
        <div className="nemeson__div">
          <div className="nemeson__img">
            <div className="hero__img">
              <img src={nemesonH} alt="nemeson" />
            </div>
          </div>
          <div className="nemeson__desc">
            <p>
              Dispositivo inteligente de fabricación a medida, desarrollado en España y personalizable; lo que permite
              una total adaptación del dispositivo al oído del usuario.
            </p>
            <div className="article__div">
              <article>
                <img src={llave} />
                <p>Fabricación a medida</p>
              </article>
              <article>
                <img src={vol} />
                <p>Reducción ruido automática</p>
              </article>
              <article>
                <img src={ruido} />
                <p>Evita aislarse del entorno</p>
              </article>
            </div>

            <p style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
              <span>595€</span> *299€
            </p>
            <button onClick={(e) => click(e)}>Comprar</button>
          </div>
        </div>
      </section>
    </>
    //  <>
    //   <section className="nemeson">
    //     <Link to="/" className="arrowContainer"></Link>
    //     <img id="logo" className="fixedTitle" src={logo} alt="logo" />
    //     <div className="nemeson__title">
    //       <img className="One__title" src={nemesonHunt} alt="nemesonOne" />
    //     </div>
    //     <div className="nemeson__div">
    //       <div className="nemeson__img">
    //         <div className="hero__img">
    //           <img src={nemesonH} alt="nemeson" />
    //         </div>
    //       </div>
    //       <div className="nemeson__desc">
    //         <p>
    //           Dispositivo inteligente de fabricación a medida, desarrollado en España y personalizable; lo que permite
    //           una total adaptación del dispositivo al oído del usuario.
    //         </p>
    //         <p>
    //           Nemeson Hunt reduce el impacto del ruido de forma automática a un umbral de 30 dB evitando el riesgo que
    //           supone el uso de los dispositivos pasivos de aislarse del entorno y amplifica las frecuencias agudas para
    //           la caza menor.
    //         </p>
    //         <p className="bs">
    //           Nemeson Hunt representa una nueva generación de protectores auditivos especialmente diseñados para la
    //           práctica deportiva de la caza y deportes de tiro.
    //         </p>
    //         <p>
    //           Benefíciate de las ventajas de uso de un dispositivo único que ha sido desarrollado tras haber estudiado
    //           más de 50 000 perfiles audiológicos de cazadores y más de 20 años de experiencia en el sector.
    //         </p>
    //         <p style={{ fontSize: 30, fontWeight: "bold" }}>
    //           <span>595€</span> *299€
    //         </p>
    //         <button onClick={(e) => click(e)}>Comprar</button>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
};

export default NemesonHunt;
