import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNextMeetupEvent } from '../actions/index'

class Meetup extends Component {
  componentWillMount(){
    this.props.fetchNextMeetupEvent();
  }

  

  render(){
    if(this.props.meetup.meetup_event){
      return (
        <div className="row">
          <div className="col-md-6 event-image">
          </div>
          <div className="col-md-6 event-content">
            <div className="event-information">
              <h2 className="event-title">{this.props.meetup.meetup_event.name}</h2>
              <span className="event-location">{/*this.props.meetup.meetup_event.venue.address_1*/}</span><br />
              <span className="event-state">{/*this.props.meetup.meetup_event.venue.city*/}, {/*this.props.meetup.meetup_event.venue.state*/}</span><br />
              <span className="event-time">6:30 - 8:30 p.m.</span>

              <p className="event-description">
                <div dangerouslySetInnerHTML={{__html: this.props.meetup.meetup_event.description}} />;
              </p>
            </div>
            <a href={this.props.meetup.meetup_event.link}>
              <div className="btn-container" href="">
                <span className="rsvp-btn">RSVP</span>
              </div>
            </a>
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="loading">
          <img src="../../assets/images/spinner-large.gif"/>
        </div>
      )
    }
  }
}

function mapStatetoProps(state){
  return { meetup: state.meetup };
}

export default connect(mapStatetoProps, { fetchNextMeetupEvent })(Meetup);
