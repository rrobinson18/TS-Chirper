import React from "react";
import { Link } from 'react-router-dom';



export default class Nav extends React.Component<INavProps, INavState> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
      chirps: []
    };
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li><Link to="/">Chirps</Link></li>
        <li><Link to="">Add Chrips</Link></li>
        </ul>
      </div>
    </nav>
    );
  }
}

interface INavProps {}

interface INavState {
  chirps: { id: string; user: string; text: string }[];
}
