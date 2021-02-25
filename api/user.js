const router = require('express').Router()

const User = require("../models/User")



router.post('/new', async (req, res) =>{
    const data = req.body

    try{

    const response = await User.insertMany(data)
    res.json({newId: response._id})

    }
    catch(err){
        console.error(err)
        res.json({error: err})
    }

})



router.get('/:id', async (req, res) =>{
    const id = req.params.id

    try{

    const response = await User.findById(id)
    res.json({newId: response})

    }
    catch(err){
        console.error(err)
        res.json({error: err})
    }

})

module.exports = router