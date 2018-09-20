import React, { Component } from "react";

class Emails extends Component {



    render() {

        return (
            <a href="#" className="text-dark">
                <div className="inbox-item">
                    <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-2.jpg" className="thumb-md rounded-circle" alt="" /></div>
                    <h6 className="inbox-item-author mt-0 mb-1">{this.props.item.name}</h6>
                    <p className="inbox-item-text text-muted mb-0">{this.props.item.message}</p>
                    <p className="inbox-item-date text-muted">{this.props.item.created}</p>

                </div>
            </a>

        );
    }
}

export default Emails;




