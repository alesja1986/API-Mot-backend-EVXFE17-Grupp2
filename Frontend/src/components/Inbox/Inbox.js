import React, { Component } from "react";
import update from "react-addons-update";
import { EmailComponent } from "./Emails.js";



class App extends Component {
    constructor() {
        super();
        this.state = {
            emails: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/inbox/")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        emails: data
                    });
                },

                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }
    render() {
        return (
            <div className="row">

                <div className="col-xl-4 col-lg-6">
                    <div className="card m-b-20">
                        <div className="card-body">
                            <h4 className="mt-0 header-title mb-3">Inbox</h4>
                            <div className="inbox-wid">
                                {this.state.emails.map((item, i) => {
                                    return <EmailComponent key={i} name={item.name} message={item.message} created={item.created} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default App;
