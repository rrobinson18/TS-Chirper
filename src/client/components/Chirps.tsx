import React from 'react';
import { Link } from 'react-router-dom';


export default class Chirps extends React.Component<IChirpsProps, IChirpsState> {
    constructor(props: IChirpsProps) {
        super(props);

        this.state = {
            chirps: [],
    }; 
}

async componentDidMount() {
    let r = await fetch("/api/chirpr");
    let data = await r.json();
    let chirps = Object.keys(data).map(key => ({
        id: key,
        user: data[key].user,
        text: data[key].text     
      }));
    chirps.pop();
    chirps.reverse();
    this.setState({ chirps });
  }

render() {
    return (
        <main className="container">
        <div className="row">
          {this.state.chirps.map(chirp => {
            return (
              <div key={chirp.id} className="col-md-12">
                <div className="card text-center">
                  <div className="card-body">
                    <h4 className="card-title">{chirp.user}</h4>
                    <p className="card-text">{chirp.text}</p>
                    <Link className="btn btn-outline-success" to={`/${chirp.id}/admin`}>Admin</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}

interface IChirpsProps {}

interface IChirpsState {
    chirps: { 
        id: string; 
        user: string; 
        text: string }[];
}