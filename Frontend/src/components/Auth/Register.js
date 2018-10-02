import React, { Component } from "react";
import { register } from "./UserFunctions";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.signInBtn = this.signInBtn.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    signInBtn(e) {
        e.preventDefault();
        this.props.history.push("/login");
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        };

        register(user);

        this.props.history.push("/login");
    };




    render() {
        return (
            <div className="container">
                <div className="row" id="landing">
                    <div className="col-md-6 mt-5 mx-auto" id="land">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="username"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign Up
							</button>
                            <button type="button" className="btn btn-lg btn-light btn-block" onClick={this.signInBtn}>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;