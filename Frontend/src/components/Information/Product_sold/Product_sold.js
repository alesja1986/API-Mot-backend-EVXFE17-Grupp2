import React, { Component, Fragment } from "react";

class ProductSold extends Component {

    constructor() {
        super();
        this.state;
    }
 
    componentWillMount(){
        fetch("http://localhost:3001/api/simon/products")
        .then(result => result.json())
        .then (result => {
            this.setState({
                products: result
            })
          console.log(this.state)
        })

       .catch(err => console.log(err))
        
    }

    displayProductsSold() {
        if(this.state === null) {
           
            return "Loading"
            
        }else if(this.state.products.length === 0){
            return "Nothing in the database to fetch"
        }
        else {
            let products = 0;
            for (let i = 0; i < this.state.products.length; i++) {
                const element = this.state.products[i].quantity;
                products += element;                                                     
            }
            return products
          
        }
    }

    render(){
        return(
            <div className="col-xl-3 col-md-6">
                <div className="card mini-stat bg-primary">
                    <div className="card-body mini-stat-img">
                        <div className="mini-stat-icon">
                            <i className="mdi mdi-briefcase-check float-right"></i>
                        </div>
                        <div className="text-white">
                            <h6 className="text-uppercase mb-3">Product Sold</h6>
                            <h4 className="mb-4">{this.displayProductsSold()}</h4>
                            <span className="badge badge-info"> +89% </span> <span className="ml-2">From previous period</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductSold;