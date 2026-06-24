import '../css/Event.css'

const Event = ({ event }) => {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })

    return (
        <article className='event-information'>
            <img src={event.image} alt={event.name} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.name}</h3>
                    <p>{event.audience}</p>
                    <p>{formattedDate}</p>
                    <p>{event.address}, {event.city}</p>
                </div>
            </div>
        </article>
    )
}

export default Event
