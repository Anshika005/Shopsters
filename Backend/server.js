import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectCloudinary from './config/cloudinary.js'
import connectDB from './config/mongodb.js'

// App config
const app = express()
const port = process.env.PORT || 4004
connectDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors())

// API endpoints
app.get('/', (req, res) => {
    res.send("API Working")
})

// Start server with error handling
app.listen(port, (err) => {
    if (err) {
        console.error("Error starting server:", err)
    } else {
        console.log("Server started on PORT: " + port)
        console.log(`Visit: http://localhost:${port}`)
    }
})