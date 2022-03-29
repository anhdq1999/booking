const express = require('express')
const morgan = require('morgan')

const database = require('./config/database/index.js')
const app = express()
const port = 3000

const UserController = require('./controllers/UserController')

database.connect();

app.use(morgan('combined'))

app.get('/', (res, req) => {
    res.send('hello World')
})
app.get('/users/store',UserController.show())
app.listen(port, () => console.log(`Server is running at port :${port}`))
