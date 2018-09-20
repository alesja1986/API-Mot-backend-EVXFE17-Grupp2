import React, { Component } from "react";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    onChange = e => {
        // update the component state with a change to either the username or password.
        if (e.target.name === "username") {
            this.setState({ username: e.target.value });
        }
        else {
            this.setState({ password: e.target.value });
        }
    };

    onSubmit = e => {
        e.preventDefault();

        // calls the passed callback from the parent <App> component.
        this.props.onLogin(e.target.username.value, e.target.password.value);
    }

    render() {
        // render a login form and perform manual validation.
        const { username, password } = this.state;

        return (
            <div className="login">
                <form onSubmit={this.onSubmit} className="loginForm">
                    <label>Username</label>
                    <input
                        name="username"
                        type="text"
                        value={username}
                        onChange={this.onChange}
                    />
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.onChange}
                    />
                </form>
                <button id="loginBtn">Login</button>
            </div>

        );
    }
}

export default Login;