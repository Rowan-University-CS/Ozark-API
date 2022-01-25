/* 
 * Import all dependencies needed
 */
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// app.run(cors())

app.listen(3000, console.log('Listening on Port 3000...'))

app.get('/', (req, res) => {
    res.send("Welcome to the Ozark API!")
})

