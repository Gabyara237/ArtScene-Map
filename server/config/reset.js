import {pool} from "./database.js"
import dotenv from 'dotenv'
import eventData from "../data/events.js"


const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        audience VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        date TIMESTAMP NOT NULL,
        city VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )
`

const createEventsTable= async ()=>{
    try{
        await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    }catch (err){
        console.error('Error creating events table', err)
    }
}


const seedEventsTable = async () =>{
    await createEventsTable()

    eventData.forEach(event => {
        const insertQuery={
            text: 'INSERT INTO events (name, audience, image, description, date, city, address, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            values:[
                event.name,
                event.audience,
                event.image,
                event.description,
                event.date,
                event.city,
                event.address,
                event.submittedBy,
                event.submittedOn,
            ]
        }
        pool.query(insertQuery,(err)=>{
            if (err){
                console.error(' Error inserting event', err)
                return
            }
            console.log(`✅ ${event.name} added successfully`)
        })
    });
    console.log('Events seeded successfully')
}

seedEventsTable()