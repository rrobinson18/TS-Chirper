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
      
        <Link to="/" className="btn btn-outline-success mt-5 mx-5 mb-5">Chirps</Link>
        <Link to="/new" className="btn btn-outline-success mt-5 mx-5 mb-5">Add Chrips</Link>
        
      </div>
    </nav>
    );
  }
}

interface INavProps {}

interface INavState {
  chirps: { id: string; user: string; text: string }[];
}
