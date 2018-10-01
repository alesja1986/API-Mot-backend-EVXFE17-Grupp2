import React, { Component } from 'react'
// import jwt_decode from 'jwt-decode'

//IMPORT ALL COMPONENTS HERE
import DashBoard from "../DashBoard/DashBoard.js";
import Wrapper from "../Wrapper/Wrapper.js";
import CardCollection from "../Information/index.js";
import Graphs from "../Graphs";
import Tables from "../Tables";
import Inbox from "../Inbox/Inbox.js";
import RecentActivity from "../RecentActivity/RecentActivity.js";
import YearlySales from "../YearlySales/YearlySales.js";



class Main extends Component {


    render() {
        return (
            <div>
                <DashBoard />
                <Wrapper>
                    <CardCollection />
                    <Graphs />
                    <Tables />
                    <Inbox />
                    <RecentActivity />
                    <YearlySales />
                </Wrapper>
            </div>
        )
    }
}

export default Main;