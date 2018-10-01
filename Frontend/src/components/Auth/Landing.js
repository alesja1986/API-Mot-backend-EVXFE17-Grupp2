import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Main from "./Main.js";




class Landing extends Component {

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/login`)
    }

    render() {
        const loginRegLink = (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto text-center">
                        <h2>
                            <Link to="/login" className="nav-link">
                                Sign In
                    </Link>
                        </h2>
                        <h2>
                            <Link to="/register" className="nav-link">
                                Sign Up
                    </Link>
                        </h2>
                    </div>
                </div>
            </div >
        )

        const authLink = (
            <div>
                <Main />
            </div>
        )
        return (
            <div className="container">
                {localStorage.usertoken ? authLink : loginRegLink}
            </div>
        )
    }

}

export default withRouter(Landing);