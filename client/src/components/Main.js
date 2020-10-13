import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import CreatePlan from "./CreatePlan";
import Dashboard from "./Dashboard";

const Main = (props) => {

    console.log(props.match.url)
    console.log(props.match.path)

    return(
        <Router>
            <div className="App">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={`${props.match.path}/dashboard`}>List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`${props.match.path}/create`}>Create Plan</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <Route path={`${props.match.path}/dashboard`} component={Dashboard} />
                                <Route path={`${props.match.path}/create`} component={CreatePlan} />
                                <Redirect from='/main' to={`${props.match.path}/dashboard`}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Main;
