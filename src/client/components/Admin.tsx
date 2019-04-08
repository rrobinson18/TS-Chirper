import React from 'react';
import { text } from 'body-parser';



export default class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
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


async componentWillMount() {
    let data = {user: name, text: text};
    fetch(`/api/chirps/${this.props}`, {
        method: 'POST',
        body: JSON.stringify(data)
    
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON
    .stringify(response)))
    .catch(error => console.error('Error:', error));
}

render() {
    return(
        <div className="container">
        <div className="row my-2">
            <div className="col-md-12">
                <form className="form-group p-3 border border-warning rounded">
                    <label>Edit Username: </label>
                    <input value={this.state.user} onChange={ this.handleUser} className="p-1 form-control" placeholder="Edit username ..." />
                    <label>Edit Message: </label>
                    <input value={this.state.text} onChange={ this.handleMessageChange } className="p-1 form-control" placeholder="Type here ..." />
                    <button onSubmit={ this.handleClickSubmit } className="btn btn-lg btn-outline-warning mt-2">Save Edit</button>
                    <button onSubmit={ this.handleClickSubmit } className="btn btn-lg btn-outline-warning mt-2">Delete</button>
                </form>
            </div>
        </div>
    </div>
    )
}

}


interface IAdminProps {

}

interface IAdminState {
    chirps:{ id: string; user: string; text: string }[];
}