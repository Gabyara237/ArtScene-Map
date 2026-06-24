const getAllEvents = async () => {
    const response = await fetch('/api/events')
    const data = await response.json()
    return data
}

const getEventById = async (id) => {
    const response = await fetch(`/api/events/${id}`)
    const data = await response.json()
    return data
}

const getEventsByCity = async (city) => {
    const response = await fetch(`/api/events?city=${encodeURIComponent(city)}`)
    const data = await response.json()
    return data
}

export default { getAllEvents, getEventById, getEventsByCity }
