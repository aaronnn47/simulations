const massive = require('massive')
const bodyParser = require('body-parser')
const express = require('express')
const hc = require('./Controller/controller')
require('dotenv').config()

let app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
})
.catch(err=>console.log(err))

app.get('/housing', hc.read)
app.post('/housing/post', hc.create)


app.listen(SERVER_PORT,()=>{
    console.log(`Listening on server port ${SERVER_PORT}`)
})





