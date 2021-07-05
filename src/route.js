const express = require('express')
const questioncontroller = require('./controllers/questioncontroller')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index" , {page: 'enter_room'}))
route.get('/create_pass', (req,res) => res.render("index", {page: 'create_pass'}))

route.post('/create_room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room' , questioncontroller.create)
route.post('/question/:room/:question/:action', questioncontroller.index)

module.exports = route