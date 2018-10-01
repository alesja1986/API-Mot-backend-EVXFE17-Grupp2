import React, { Component, Fragment } from "react";

class AveragePrice extends Component {

    constructor() {
        super();
        this.state;
    }
 
    componentWillMount(){
        fetch("http://localhost:3001/api/simon/orders")
        .then(result => result.json())
        .then (result => {
            this.setState({
                orders: result
            })
          
        })

       .catch(err => console.log(err))
        
    }
    

    displayAveragePrice() {
        if(this.state === null) {
           
            return "Loading"
            
        }else if(this.state.orders.length === 0){
            return "Nothing in the database to fetch"
        }
        else {
            let price = 0;
            for (let i = 0; i < this.state.orders.length; i++) {
                const element = this.state.orders[i].price;
                price += element;                                                     
            }
            return "$" + parseInt(price / this.state.orders.length)
          
        }
    }

    render(){
        return(
            <div className="col-xl-3 col-md-6">
                <div className="card mini-stat bg-primary">
                    <div className="card-body mini-stat-img">
                        <div className="mini-stat-icon">
                            <i className="mdi mdi-tag-text-outline float-right"></i>
                        </div>
                        <div className="text-white">
                            <h6 className="text-uppercase mb-3">Average Price</h6>
                            <h4 className="mb-4">{this.displayAveragePrice()}</h4>
                            <span className="badge badge-warning"> 0% </span> <span className="ml-2">From previous period</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AveragePrice;