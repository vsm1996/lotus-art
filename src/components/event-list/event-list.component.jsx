import React, { Component } from "react";
import {connect } from 'react-redux'

import EventItem from "../event-item/event-item.component";

import { firestore } from "../../firebase/firebase.utils";
import  {getEvents} from '../../redux/events/events.actions'

import "./event-list.styles.css";

class Events extends Component {
  componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
    const { getEvents } = this.props
    const events = [];
    let eventRefs = firestore.collection("events");
    await eventRefs
      .get()
      .then(snapshot => {
        // console.log(snapshot.docs);
        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
          events.push(doc.data());
        });
      })
      .catch(err => {
        console.log("Error getting documents");
      });

    getEvents(events);
  };

  render() {
    const { events } = this.props;
    return (
      <div className="events-container">
        <h1>Events</h1>
        {events.length ? (
          <div className="event-list-grid">
            {events.map((event, i) => (
              <EventItem key={i} event={event} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.events
})

const matchDispatchToProps = dispatch => ({
  getEvents: events => dispatch(getEvents(events))
})

export default connect(mapStateToProps, matchDispatchToProps)(Events);
