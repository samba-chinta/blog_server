import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import response from './routes/response.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000 

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("<h2>Hello World!</h2>")
})

app.use('/', response)

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connectionOfMongoDB = mongoose.connection

connectionOfMongoDB.once('connected', () => {
  console.log("Successfully connected to Database")
})

connectionOfMongoDB.on('error', (err) => {
  console.log("An error occurred while connecting to Database")
})

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`)
})