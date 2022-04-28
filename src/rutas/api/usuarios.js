const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('estas en raiz usuarios')
})

module.exports = router