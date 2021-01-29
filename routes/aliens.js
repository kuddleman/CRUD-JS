import express from 'express'
const router = express.Router()
import Alien from '../models/alien.js'

router.get('/', async(req, res)=>{
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch(err) {
        res.send(`Error: ${err}`)    
    }
    
})

router.post('/', async(req, res) =>{
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    } catch(err) {
        res.send(`Error`)
    }
})

router.get('/:id', async(req, res)=>{
    try {
        
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch(err) {
        res.send(`Error: ${err}`)
    }
})





router.patch('/:id', async(req, res)=>{
    try {
        
        
        // const alien = await Alien.findById(req.params.id)
        // alien.tech = req.body.tech
        // const a1 = await alien.save()
        // res.send(`Alien with name: ${alien.name} has been updated!`)


        const alien = await Alien.findById(req.params.id)
        const {id} = req.params
        const { sub, name, tech } = req.body


        if(name) alien.name = name
        if(tech) alien.tech = tech
        if(sub) alien.sub = sub
        alien.save()
        res.send(`${name} with id: ${id} has been updated!`)
    } catch(err) {
        res.send(`Error: ${err}`)
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const alien = await Alien.findById(req.params.id)
        alien.delete()
        res.send(`Alien ${alien.name} with was deleted!`)

    } catch(err) {
        res.send(`Error: ${err}`)
    }
})


export default router