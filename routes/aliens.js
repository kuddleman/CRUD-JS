import express from 'express'
const router = express.Router()

router.get('/', (req, res)=>{
    console.log(`GET request`)
    res.send('<h1>Get Request</h1>')
})

export default router