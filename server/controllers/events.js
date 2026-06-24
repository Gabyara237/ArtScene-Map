import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    const { city } = req.query
    try{
        const results = city
            ? await pool.query('SELECT * FROM events WHERE city = $1 ORDER BY id ASC', [city])
            : await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(results.rows)
    }catch (err){
        console.error('getEvents error:', err.message)
        res.status(409).json({error: err.message})
    }
}

const getEvent = async (req, res) => {
    const { eventId } = req.params
    try {
        const results = await pool.query(
            'SELECT * FROM events WHERE id = $1',
            [eventId]
        )
        if (results.rows.length === 0) return res.status(404).json({ error: 'Workshop not found' })
        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

export default{
    getEvents,
    getEvent
}