import React, { Component } from "react";
import API from "../../utils/API";
import Activity from "../Activity";

// ACTIVITIES THAT ARE DISPLAYED IN THE GROUPS PAGE IN THE EVENTS SECTION
class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      event: 0
    };
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities() {
    API.getActivities().then(response => {
      this.setState({
        activities: response.data
      });
    });
  }

  // TODO Clicking the upvote arrow changes color to orange
  // TODO Clicking an upvoted arrow again removes the increment and changes the arrow color back
  handleUpVote = id => {
    API.putActivity(id);
    this.setState({ upvoted: (this.upvoted = true) });
    // FIXME needs to show upvoted # from database
    this.getActivities();
  };

  // handleUpVote = id => {
  //   API.putActivity(id).then(response => {
  //     this.setState({
  //       upvoted: (this.upvoted = true),
  //       activities: response.data
  //     });
  //   });
  // };

  // ACTIVITIES ARE MAPPED THROUGH AND RENDERED
  render() {
    let inputStyle = this.upvoted
      ? {
          fill: "#ff8900",
          stroke: "#ff8900"
        }
      : {
          fill: "rgba(255, 255, 255, 0.7)",
          stroke: "rgba(255, 255, 255, 0.5)"
        };
    return (
      <>
        <div className="imageRow">
          {this.state.activities &&
            this.state.activities.map(activity => (
              <Activity
                key={activity._id}
                id={activity._id}
                image={activity.image}
                style={inputStyle}
                activity={activity.activityName}
                getActivities={this.handleUpVote.bind(this)}
                // update={this.update}
                subtitle={activity.subtitle}
                upvotes={activity.upvotes}
              />
            ))}
        </div>
      </>
    );
  }
}

export default Activities;
