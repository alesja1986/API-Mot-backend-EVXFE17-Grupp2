import React, {Component} from "react";

class YearlySales extends Component {

	constructor() {
        super();
        this.state = {
			allSales:[],
			year:2018,
        };
     }

	componentWillMount =()=>{
	 this.fetchSales();
	}
		   
	fetchSales=()=>{
		fetch(`http://localhost:3001/api/yearlysales/${this.state.year}`)
		.then(res => res.json())        
		.then(result => {
			 this.setState({allSales:result,year:this.state.year})
			})
			.catch(error => console.log(error));  
		}

	sumSales =()=>{
		let allSalesSum=0
       
		this.state.allSales.map((item, i)=>{
		     let price = item.total;	 
		     allSalesSum+=price
		})
		return allSalesSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}	

	render(){
		return (
			<div className="card m-b-20">
			<div className="card-body">
				<h4 className="mt-0 header-title">Yearly Sales</h4>
				<div className="row">
					<div className="col-md-4">
						<div> 
							<h4>{ this.sumSales()}</h4>
							<p className="text-muted">The languadges only differ grammars</p>
							<a href="#" className="text-primary">Learn more <i className="mdi mdi-chevron-double-right"></i></a>
						</div>
					</div>
					<div className="col-md-8 text-right">
						<div id="sparkline"></div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default YearlySales;