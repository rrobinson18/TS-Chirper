import React from 'react';
import { RouteComponentProps } from 'react-router-dom';


export default class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props);

        this.state = {
            text: '',
            user: ''
        }
    }

    async ComponentDidMount {
        try {
            let r = await fetch(`/api/chirps/${this.props.match.params.id}`);
            let chirp: { text: string, user: string } = await r.json();
            this.setState({text: chirp.text, user: chirp.user});
        } catch (error) {
            console.log(error);
        }
    }

    handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: e.target.value });
    }


    handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ user: e.target.value });
    }

    handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let body = { user: this.state.user, text: this.state.text };
        try {
            await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'PUT',
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

    handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'DELETE',
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
            <h4 className="text-center">Admin for Chirp {this.props.match.params.id}</h4>
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
                        <button onClick={ this.handleEdit } className="btn btn-lg btn-warning mt-2">Save Edit!</button>
                        <button onClick={ this.handleDelete } className="btn btn-lg btn-danger mt-2">Delete!</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }   
}



    interface IAdminProps extends RouteComponentProps<{ id: string; }> { }

    interface IAdminState {
        user: string;
        text: string;
    }