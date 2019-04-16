import React from 'react';
import { RouteComponentProps } from 'react-router-dom';



export default class AddChirp extends React.Component<IAddChirpProps, IAppChirpState> {
    constructor(props: IAddChirpProps) {
        super(props);

        this.state = {
            text: '',
            user: ''
        }
    }

    handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: e.target.value });
    }


    handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ user: e.target.value });
    }

    handleClickSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let body = { user: this.state.user, text: this.state.text };
        try {
            await fetch('/api/chirps/', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            });
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
        this.setState({ text: "", user: "" });
    }    
    
render() {
    return (
        <div className="container">
            <div className="row my-2">
                <div className="col-md-12">
                    <form className="form-group p-3 border border-warning rounded">
                        <label>Username: </label>
                        <input
                            value={this.state.user}
                            onChange={ this.handleUser}
                            className="p-1 form-control"
                            placeholder="Your username ..." />
                        <label>Chat Message: </label>
                        <input
                            value={this.state.text}
                            onChange={ this.handleMessageChange }
                            className="p-1 form-control"
                            placeholder="Type here ..." />
                        <button onClick={ this.handleClickSubmit } className="btn btn-lg btn-outline-warning mt-2">Chat!</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }   
}



    interface IAddChirpProps extends RouteComponentProps { }

    interface IAppChirpState{
        text: string;
        user: string;
    }