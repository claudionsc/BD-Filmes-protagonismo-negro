require("dotenv").config()

const Express = require('express')
const bodyparser = require('body-parser')

const userRoute = require('./routes/userRoutes')

const cors = require('cors')
const app = Express()
app.use(cors())

const database = process.env.DATABASE_URL
module.exports = database

const port = process.env.PORT || 5000
// const port = 5000

app.set('json spaces', 2)
app.use(bodyparser.urlencoded({ extended: false }))

userRoute(app)

// app.use(userRoute)

app.get('/', (req, res) => res.send('Conectado'))
app.listen(port, () => console.log('------- Conexão com a porta ok ------------'))