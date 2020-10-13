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

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users table-responsive">
                <div className="container-fluid pl-0 pr-0">
                    <table className="table table-striped table-dark table-hover">
                        <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
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
