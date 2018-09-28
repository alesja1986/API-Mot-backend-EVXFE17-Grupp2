import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

//IMPORT ALL COMPONENTS HERE
import DashBoard from "../DashBoard/DashBoard.js";
import Inbox from "../Inbox/Inbox.js";


class Main extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.username,
        })
    }

    render() {
        return (
            <div>
                <DashBoard />
                <Inbox />
            </div>
        )
    }
}

export default Main