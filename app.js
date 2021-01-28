import express from 'express'
import mongoose from 'mongoose'
import alienRouter from '../CRUDJS/routes/aliens.js'
const url = 'mongodb://localhost/AlienDBex'

const app = express()
const PORT = 9000

app.use('/aliens', alienRouter)

mongoose.connect(url, {useNewUrlParser: true,
                       useUnifiedTopology: true
                      }
                )
const con = mongoose.connection 

con.on('open', ()=>{
    console.log(`MongoDB connected....`)
})





app.listen(PORT, ()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`)
})

