import React, { Component } from "react";
import Emails from "./emails";

class Inbox extends Component {



    render() {

        let email;
        if (this.props.emails) {
            email = this.props.emails.map(item => {
                return (<Emails key={item.name} item={item} />);
            })
        }

        return (
            <div className="row">

                <div className="col-xl-4 col-lg-6">
                    <div className="card m-b-20">
                        <div className="card-body">
                            <h4 className="mt-0 header-title mb-3">Inbox</h4>
                            <div className="inbox-wid">
                                {email}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Inbox;