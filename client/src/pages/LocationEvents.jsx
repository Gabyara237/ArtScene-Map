import { useState, useEffect } from 'react'
import Event from '../components/Event'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locations = await LocationsAPI.getAllLocations()
                const currentLocation = locations[index - 1]
                if (!currentLocation) return
                setLocation(currentLocation)
                const eventsData = await EventsAPI.getEventsByCity(currentLocation.name)
                setEvents(eventsData)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [index])

    if (!location) return <h2>No location found.</h2>

    return (
        <div className='location-events'>
            <header>
                <div className='location-info'>
                    <h2>{location.name}</h2>
                </div>
            </header>

            <main>
                {events && events.length > 0
                    ? events.map(event =>
                        <Event key={event.id} event={event} />
                    )
                    : <h2>No events scheduled at this location yet!</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents
