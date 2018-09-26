import React, {Component} from "react";

class RecentActivity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activityArray:[]
        };
    }

    componentDidMount(){
            fetch("http://localhost:3001/api/recentActivity")
    .then(res => res.json())
    .then(result => this.setState({ activityArray:result},console.log(result))),
    (error) => {
    this.setState({
        error
    });
}}


    


	render(){
		return (  
            <div className="col-xl-4 col-lg-6">
            <div className="card m-b-20">
                <div className="card-body">
                    <h4 className="mt-0 header-title mb-4">Recent Activity Feed</h4>
                    <ol className="activity-feed mb-0">     			
                            {this.state.activityArray.map(function(item, i){
                                item.date=item.date.toString();
                               
                                  return (
                                      <li className="feed-item">
                                         <div className="feed-item-list">
                                           <span className="date">{item.date}</span>
                                            <span className="activity-text">{item.activity}</span>
                                        </div>
                                    </li>)})}
                                 </ol>
                         <div className="text-center">
                        <a href="#" className="btn btn-sm btn-primary" >Load More</a>
                    </div>
                </div>
            </div>
        </div>
  );
}
}

export default RecentActivity;