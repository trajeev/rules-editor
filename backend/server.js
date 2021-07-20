import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv' 
import factsRoutes from './routes/facts-router.js'
import bodyParser from 'body-parser'

const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}))
app.use(cors())

app.use('/', factsRoutes)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch(err => console.log(err))

mongoose.set('useFindAndModify', false)