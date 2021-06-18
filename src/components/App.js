import { useState, useLayoutEffect } from "react";
import Routes from "./routes/Routes";
import "./App.css";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import ShopProvider from "../context/shopContext";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Carrito from "./shared/Cart";
import nemesonHunt from "../assets/nemesonHunt.png";
import logo from "../assets/logo.png";

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App(props) {
  const [modalMail, setModalMail] = useState(true);
  const [intial, setinitial] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    notify();

    setTimeout(() => {
      setinitial(false);
    }, 5000);
    setTimeout(() => {
      setModalMail(false);
    }, 10000);
  }, []);

  function notify() {
    toast("Esta web utiliza cookies para analizar y mejorar su experiencia de navegación, si permanece acepta su uso", {
      position: "bottom-center",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_bqb77iz", "template_t19zq6q", e.target, "user_fkunRtbDV9NVetYNprjoI").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setModalMail(false);
  }

  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydratation>
        {/* <Navigation {...props} /> */}
        <Carrito />
        {intial ? (
          <div className="animation">
            <img src={logo} alt="logo" />

            <p>Audiología inteligente</p>
          </div>
        ) : (
          <>
            <main>
              <Routes />
              {modalMail && (
                <div className="newsletterModal">
                  <div className="newsletterModal__modal">
                    <button className="modal__button" onClick={() => setModalMail(false)}>
                      X
                    </button>
                    <div className="innerModal">
                      {/* <form onSubmit={sendEmail}>
                        <input
                          type="text"
                          className="modal__input"
                          name="name"
                          placeholder="Nombre y Appellidos"
                        ></input>
                        <input
                          type="email"
                          className="modal__input"
                          aria-describedby="emailHelp"
                          name="mail"
                          placeholder="E-mail"
                        />
                        <button type="submit">Subscribirse</button>
                      </form> */}
                      {/* <img src={logo} alt="logo" />

                      <h2>Feria Cinegetica</h2> */}
                      <h2>Web exclusiva para Cinegética</h2>
                      <div className="feria__address">
                        <p>
                          <span>Stand:</span>143
                        </p>
                        <p>
                          <span>Pabellón:</span> 14
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <ToastContainer
                position="bottom-center"
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                autoClose={false}
              />
            </main>
            <Footer />
          </>
        )}
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
