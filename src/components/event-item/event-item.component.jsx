import React from 'react'
import './event-item.styles.css'
const EventItem = ({event}) => {
    return (
        <div>
             <img src={event.img} alt="art desc." className="event-img" />
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.address}</p>
            <p>${event.price}</p>
        </div>
    )
}

export default EventItem
