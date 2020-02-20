import React from 'react'
import './event-item.styles.css'
const EventItem = ({event}) => {
    return (
        <div className="event-item">
            <a href={event.urlLink}><img src={event.img} alt="art desc." className="event-img" /></a>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.address}</p>
            <p>${event.price}</p>
        </div>
    )
}

export default EventItem
