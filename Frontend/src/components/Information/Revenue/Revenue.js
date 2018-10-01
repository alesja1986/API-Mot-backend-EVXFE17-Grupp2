import React, { Component, Fragment } from "react";

class Revenue extends Component {

    constructor() {
        super();
        this.state;
    }
 
    componentWillMount(){
        fetch("http://localhost:3001/api/simon/orders")
        .then(result => result.json())
        .then (result => {
            // console.log(result.length)
            this.setState({
                orders: result
                
            })
            // console.log(this.state)
        })

       .catch(err => console.log(err))
        
    }
    

    displayRevenue() {
        // console.log(this.state)
        if(this.state === null) {
            // console.log(this.state.orders)
            return "Loading"
            
        } else if(this.state.orders.length === 0){
            return "Nothing in the database to fetch"
        }else {
            let price = 0;
            // console.log(this.state.orders.length)
            for (let i = 0; i < this.state.orders.length; i++) {
                const element = this.state.orders[i].price;
                price += element;                                                     
            }
            return "$" + price
          
        }
    }

    render(){
        return(
            <div className="col-xl-3 col-md-6">
                <div className="card mini-stat bg-primary">
                    <div className="card-body mini-stat-img">
                        <div className="mini-stat-icon">
                            <i className="mdi mdi-buffer float-right"></i>
                        </div>
                        <div className="text-white">
                            <h6 className="text-uppercase mb-3">Revenue</h6>
                            <h4 className="mb-4">{this.displayRevenue()}</h4>
                            <span className="badge badge-danger"> -29% </span> <span className="ml-2">From previous period</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Revenue;