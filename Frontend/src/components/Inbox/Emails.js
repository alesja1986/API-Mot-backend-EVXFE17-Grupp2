import React, { Component } from "react";


export const EmailComponent = ({ name, message, created }) => (
    <a href="#" className="text-dark">
        <div className="inbox-item">
            <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-2.jpg" className="thumb-md rounded-circle" alt="" /></div>
            <h6 className="inbox-item-author mt-0 mb-1">{name}</h6>
            <p className="inbox-item-text text-muted mb-0">{message}</p>
            <p className="inbox-item-date text-muted">{created}</p>

        </div>
    </a>

);