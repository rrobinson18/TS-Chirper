import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/app";
import Card from "./components/Card";
import Nav from "./components/Nav";

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      chirps: []
    };
  }


  render() {
    return (
      
      <Router>
        <Switch>
          <Route>
            <Nav></Nav>
            <Card></Card>
          </Route>
        </Switch>
      </Router>

    );
  }
}

interface IAppProps {}

interface IAppState {
  chirps: { id: string; user: string; text: string }[];
}
