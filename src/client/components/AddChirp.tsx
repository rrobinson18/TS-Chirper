import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';


export default class AddChirp extends React.Component<IAddChirpProps, IAppChirpState> {
    constructor(props: IAddChirpProps) {
        super(props);

        this.state = {
            chirps: []
        }
    }

    handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: e.target.value });
    }


    handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ user: e.target.value });
    }

    handleClickSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({ chirps: [], text: "", user: "" });
    }    
    

 
render() {
    return (
        <div className="container">
            <div className="row my-2">
                <div className="col-md-12">
                    <form className="form-group p-3 border border-warning rounded">
                        <label>Username: </label>
                        <input
                            value={this.state.chirps}
                            onChange={ this.handleUser}
                            className="p-1 form-control"
                            placeholder="Your username ..." />
                        <label>Chat Message: </label>
                        <input
                            value={this.state.chirps}
                            onChange={ this.handleMessageChange }
                            className="p-1 form-control"
                            placeholder="Type here ..." />
                        <Link onSubmit={ this.handleClickSubmit } className="btn btn-lg btn-outline-warning mt-2">Chat!</Link>
                    </form>
                </div>
            </div>
            <div className="row">
            {this.state.chirps.map((chat, index) => {
                return <Card key={} chat={chat}></Card>
            })}
            </div>
        </div>
        );
    }   
}



    interface IAddChirpProps{
       
    }

    interface IAppChirpState{
        chirps: {
            'id': string;
            'user': string;
            'text': string
        }[];
    }