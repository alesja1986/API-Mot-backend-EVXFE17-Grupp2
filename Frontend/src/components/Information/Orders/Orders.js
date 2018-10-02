import React, { Component, Fragment } from "react";

class Orders extends Component {

    constructor(props) {
        super(props);
        this.state;
    }
 
    componentWillMount(){
        fetch("http://localhost:3001/api/simon/orders")
        .then(result => result.json())
        .then (result => {
            this.setState({
                orders: result,
            })
            // console.log(this.state)
        })

       .catch(err => console.log(err))
        
    }

    
    displayOrders(){
        if(this.state === null){
            return "Loading"
        } else if(this.state.orders.length === 0){
            return "There seems to be no orders at all"
        }
        else{
            return this.state.orders.length
        }

    }
   

	render(){
		return(
            <div className="col-xl-3 col-md-6">
                <div className="card mini-stat bg-primary">
                    <div className="card-body mini-stat-img">
                        <div className="mini-stat-icon">
                            <i className="mdi mdi-cube-outline float-right"></i>
                        </div>
                        <div className="text-white">
                            <h6 className="text-uppercase mb-3">Orders</h6>
                            <h4 className="mb-4">{this.displayOrders()}</h4>
                            <span className="badge badge-info"> +11% </span> <span className="ml-2">From previous period</span>
                        </div>
                    </div>
                </div>
            </div>  
		)
	}


}

export default Orders;