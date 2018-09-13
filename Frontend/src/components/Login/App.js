import React, { Component } from "react";

import Auth from "./Auth";
import Login from "./Login";

class App extends Component {
    // get the initial state from AuthService. 
    state = Auth.getAuthState();

    // ...

    isAuthenticated() {
        return this.state.user ? true : false;
    }

    login = (username, password) => {
        // login the user with the given credentials and update the component state upon success or failure respectively.
        Auth.login({ username, password })
            .then(response => {
                console.log(response)
                this.setState({
                    user: response,
                    error: null
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    user: null,
                    error: err
                })
            });
    };

    logout = () => {
        // logout the user and update the component with state given by AuthService.
        Auth.logout();
        this.setState({
            user: null
        })
    };

    testApi = () => {
        // test access to a protected API route and log the results.
        Auth.getResource("friends")
            .then(response => console.log(response.data))
            .catch(err => console.log(err));
    }

    // ...

    render() {
        // complete the JSX code below to show the proper markup depending on whether or not the user has been authenticated.

        return (
            <div className="container">

                {!this.isAuthenticated() && this.state.error ?
                    <p className="error">Login credentials were incorrect!</p>
                    : null}

                <div className="status">
                    <span>User ID: {this.isAuthenticated() ? this.state.user.name : "N/A"}</span>
                    <button onClick={this.testApi}>Test API</button>
                    {this.isAuthenticated() ?
                        <button onClick={this.logout}>Logout</button>
                        : null}

                </div>

                {!this.isAuthenticated() ?
                    <Login onLogin={this.login} />
                    : null}

            </div>
        );
    }
}

export default App;