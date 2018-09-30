import React, {Component} from "react";
import moment from "./moment.js";  // modul för 'Date' hantering

class RecentActivity extends Component {

    constructor() {
        super();
        this.state = {
            activityArray:[],  //array med 'Recent Activity Feed ',
            quantity:0
        };
     }

componentWillMount(){
      this.fetchRecentActivities();
}

fetchRecentActivities =()=>{
    let newState = this.state; 
    fetch(`http://localhost:3001/api/recentActivity/${this.state.quantity}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json, text/plain */*',
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())        
    .then(result => {
          newState.activityArray = this.state.activityArray.concat(result),
          newState.quantity=this.state.quantity +4,
         this.setState(newState)
        })
        .catch(error => console.log(error));  
}
	render(){
		return (
            <div className="col-xl-4 col-lg-6">
            <div className="card m-b-20">
                <div className="card-body" style={{overflowY : 'Scroll' , height :540}}>
                    <h4 className="mt-0 header-title mb-4" >Recent Activity Feed</h4>
                    <ol className="activity-feed mb-0" >    			
                            {this.state.activityArray.map((item, i)=>{
                                  const date = item.date;
                                  let parseDate = Date.parse(date);
                                  let readyDate=moment(parseDate).format('MMM DD');    

                                  return (
                                      <li className="feed-item" key={item.i}>
                                         <div className="feed-item-list">
                                           <span className="date">'{readyDate}'</span>
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