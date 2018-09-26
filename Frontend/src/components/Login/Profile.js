import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount() {
        const token = localStorage.userToken;
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.username
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Logged in as {this.state.username}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;