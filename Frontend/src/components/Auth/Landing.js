import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Main from "./Main.js";
import "./auth.css";

class Landing extends Component {

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem("usertoken");
        this.props.history.push("/login");
    }

    render() {
        const loginRegLink = (
            <div className="container">
                <div className="row" id="landing">
                    <div className="col-md-6  mx-auto text-center" id="land">

                        <Link to="/login" className="nav-link">
                            <button type="button" className="btn btn-lg btn-light btn-block">
                                <h2>Sign In</h2>
                            </button>
                        </Link>
                        <Link to="/register" className="nav-link">
                            <button type="button" className="btn btn-lg btn-light btn-block">
                                <h2>Sign Up</h2>
                            </button>
                        </Link>
                    </div>
                </div>
            </div >
        );

        const authLink = (
            <div>
                <Main />
            </div>
        );
        return (
            <div className="container">
                {localStorage.usertoken ? authLink : loginRegLink}
            </div>
        );
    }

}

export default withRouter(Landing);