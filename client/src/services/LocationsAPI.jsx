const getAllLocations = async () => {
    const response = await fetch('/api/events')
    const data = await response.json()
    const cities = [...new Set(data.map(event => event.city))]
    return cities.map((name, index) => ({ id: index + 1, name }))
}

export default { getAllLocations }
