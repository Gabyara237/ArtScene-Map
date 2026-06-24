import { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await EventsAPI.getAllEvents()
                setEvents(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    return (
        <div style={{ padding: '40px' }}>
            <h2 style={{ marginBottom: '32px' }}>All Events</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                {events.length > 0
                    ? events.map(event => <Event key={event.id} event={event} />)
                    : <p>No events found.</p>
                }
            </div>
        </div>
    )
}

export default Events
