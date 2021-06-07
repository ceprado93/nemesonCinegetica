import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NemesonHunt from "../pages/NemesonHunt";
import NemesonOne from "../pages/NemesonOne";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/nemesonOne" exact render={() => <NemesonOne />} />
        <Route path="/nemesonHunt" exact render={() => <NemesonHunt />} />
      </Switch>
    </>
  );
};

export default Routes;
