import React, { Component } from "react";
import Inbox from "./Inbox.js";


import "./inbox.css";

class App extends Component {

    constructor() {

        super(); //need to call super when using a constructor 

        this.state = {
            emails: []
        };

    }

    myEmails;

    getEmails = () => {



        fetch("http://localhost:3001/api/inbox") //url to api we are fetching from
            .then((res) => res.json()) // take the result and turn it into json
            .then((data) => { // take the jsondata and do something.
                let output;
                if (data.length === 0) {

                    console.log("Couldnt find Inbox");

                } else {

                    // let productId = String(product._id); // tried to send this through as parameter 
                    this.myEmails = data;
                    data.forEach((email) => { //forEach - loop, for each object we get from data we want to do something
                        console.log("EMAILS FETCHED " + email.name);

                        output += `<p>${email.name}<p/> `; //REMOVE _ TEESTING FETCH ONLY
                    });//if we do more than one thing, wrap it in {}
                }
                console.log(this.myEmails);
                document.getElementById("output").innerHTML = output; // REMOVE - TESTING FETCH ONLY

            })
            .catch((err) => console.log(err)); // logging error if there is an error
    }//fetchar, sen gör den något med svaret, sen gör den något mer, men om det failar så catchar vi och då händer detta

    // // getEmails() {

    // //     fetch("http://localhost:3001/api/inbox")
    // //         .then(function (response) {
    // //             return response.json();
    // //         })
    // //         .then(function (myJson) {
    // //             console.log("RESULT FROM FETCH GET" + myJson),
    // //                 this.setState({ emails: myJson }, function () {

    // //                 });
    // //             console.log("STATE" + this.state);
    // //         }.bind(this)

    // //         );
    // // }

    // // componentWillMount() {
    // //     this.getEmails();
    // // }

    componentDidMount() {
        this.getEmails();
    }

    render() {
        return (
            <div className="App">
                <Inbox emails={this.myEmails} />
                <div id="output"></div>
            </div>
        );
    }
}

export default App;
