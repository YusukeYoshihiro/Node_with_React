import React, { Component } from 'react';
import axios from '../apis/axios.config';

export default class CreatePlan extends Component {

    state = {
        name: '',
        email: '',
        description: ''
    }

    onChangeUserName = (e) => {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onChangeUserDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userObject = {
            plan: this.state.name,
            location: this.state.email,
            description: this.state.description
        };

        axios.post('users/create', userObject).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })

        this.setState({name: '', email: '', description: ''})
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Plan</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Location</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Description</label>
                        <input type="text" value={this.state.description} onChange={this.onChangeUserDescription} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Plan" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}
