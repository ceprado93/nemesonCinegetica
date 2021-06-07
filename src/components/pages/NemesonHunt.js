import Nemeson from "../../assets/nemeson.png";
import { useLayoutEffect, useEffect, useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { useParams } from "react-router-dom";

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
        <img src={Nemeson} alt="nemeson" />
        <div>
          <h2 className>Nemeson Hunt</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          <p style={{ fontSize: 30, fontWeight: "bold" }}>299€</p>
        </div>
        <button onClick={(e) => click(e)}>Comprar</button>
      </section>
    </>
  );
};

export default NemesonHunt;
