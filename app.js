import express from 'express'
import mongoose from 'mongoose'
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser: true,
                       useUnifiedTopology: true
                      }
                )
const con = mongoose.connection 

con.on('open', ()=>{
    console.log(`MongoDB connected....`)
})

