import React, {Component} from "react";
import moment from "./moment.js";  // modul för 'Date' hantering

class RecentActivity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activityArray:[],  //array med 'Recent Activity Feed ',
            quantity:0,
        };
     }

componentDidMount(){
      this.fetchRecentActivities();
}

fetchRecentActivities =(addQuantaty)=>{
    fetch(`http://localhost:3001/api/recentActivity/${this.state.quantity}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json, text/plain */*',
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())        
    .then(result => 
         this.setState({activityArray:result,quantity:this.state.quantity + 4},console.log(result))),
    (error => console.log(error));  
}

	render(){
		return (  
            <div className="col-xl-4 col-lg-6">
            <div className="card m-b-20">
                <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Recent Activity Feed</h4>
                    <ol className="activity-feed mb-0">     			
                            {this.state.activityArray.map(function(item, i){
                                 const date = item.date
                                  let parseDate = Date.parse(date);
                                  let readyDate=moment(parseDate).format('MMM DD');                  
                               
                                  return (
                                      <li className="feed-item" key={item.i}>
                                         <div className="feed-item-list">
                                           <span className="date">{readyDate}</span>
                                            <span className="activity-text">{item.activity}</span>
                                        </div>
                                    </li>)})}
                                 </ol>
                         <div className="text-center">
                        <a href="#" className="btn btn-sm btn-primary" onClick={this.fetchRecentActivities}>Load More</a>
                    </div>
                </div>
            </div>
        </div>
  );
}
}

export default RecentActivity;