import Routes from "./routes/Routes";
import "./App.css";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import ShopProvider from "../context/shopContext";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Carrito from "./shared/Cart";

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App(props) {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydratation>
        <Navigation {...props} />
        <Carrito />
        <main>
          <Routes />
        </main>
        <Footer />
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
