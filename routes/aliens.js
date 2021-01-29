import express from 'express'
const router = express.Router()

router.get('/', async(req, res)=>{
    try {

    } catch(err) {
        res.send(`Error: ${err}`)    
    }
    
})

export default router