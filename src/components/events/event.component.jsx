import React from 'react'
import './event.styles.css'

const Events = () => {
    const events = []
    return (
        <div className="events-container">
            <h1>Events</h1>
            { events.length ? <h3> List of events </h3> : ''}
        </div>
    )
}

export default Events
