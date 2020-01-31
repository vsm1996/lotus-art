import React, { Component } from "react";
import { firestore } from "../../firebase/firebase.utils";

import "./event-list.styles.css";
import EventItem from "../event-item/event-item.component";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
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

    this.setState({ events: events });
  };

  render() {
    const { events } = this.state;
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
export default Events;
