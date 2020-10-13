import React, { Component } from 'react';
import axios from '../apis/axios.config';
import DataTable from './data-table';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('/users')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    refresh = () => {
        axios.get('/users')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onDelete = (id) => {
        axios.delete(`users/delete/${id}`).then((res) => {
            this.refresh();
        }).catch((err) => {
            console.log(err);
        })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} onDelete={this.onDelete} refresh={this.refresh}/>;
        });
    }

    render() {
        return (
            <div className="wrapper-users table-responsive">
                <div className="container-fluid pl-0 pr-0">
                    <table className="table table-striped table-dark table-hover">
                        <thead className="thead-dark">
                        <tr>
                            <td>Plan</td>
                            <td>Where</td>
                            <td>Description</td>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
