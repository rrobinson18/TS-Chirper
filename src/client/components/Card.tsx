import React from 'react';


export default class Card extends React.Component<ICardProps, ICardState> {
    constructor(props: ICardProps) {
        super(props);

        this.state = {
            chirps: [],
    }; 
}

async componentWillMount() {
    let r = await fetch("/api/chirps");
    let data = await r.json();
    let chirps = Object.keys(data).map(key => {
      return {
        id: key,
        user: data[key].user,
        text: data[key].text
      };
    });
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
                    <button className="btn btn-primary">Admin</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    )
  }
}

interface ICardProps {}

interface ICardState {
    chirps: { 
        id: string; 
        user: string; 
        text: string }[];
}