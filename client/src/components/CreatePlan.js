import React, { Component } from 'react';
import axios from '../apis/axios.config';

export default class CreateUser extends Component {

    state = {
        name: '',
        email: ''
    }

    onChangeUserName = (e) => {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userObject = {
            name: this.state.name,
            email: this.state.email
        };

        axios.post('users/create', userObject).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })

        this.setState({name: '', email: ''})
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}
