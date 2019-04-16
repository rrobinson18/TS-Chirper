import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/app";

import Nav from "./components/Nav";
import AddChirp from './components/AddChirp';
import Chirps from './components/Chirps';
import Admin from './components/Admin';

export interface AppProps {

}

const App: React.SFC<AppProps> = () => {
  return(
    <Router>
      <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Chirps} />
        <Route exact path="/new" component={AddChirp} />
        <Route exact path="/:id/admin" component={Admin} />
      </Switch>
      </>
    </Router>
   );
}

export default App;  
   



interface IAppProps {}

interface IAppState {
  chirps: {
    id: number,
  }[];
}
