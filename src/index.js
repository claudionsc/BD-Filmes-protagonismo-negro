require("dotenv").config()

const Express = require('express')
const bodyparser = require('body-parser')

const userRoute = require('./routes/userRoutes')
const relacionalRoutes = require('./routes/relacionalRoute')

const cors = require('cors')
const app = Express()
app.use(cors())


const port = 5000

app.set('json spaces', 2)
app.use(bodyparser.urlencoded({ extended: false }))

userRoute(app)
relacionalRoutes(app)


app.get('/', (req, resp) => resp.send('======>Conectado!'))
app.listen(port, () => console.log('============>Api rodando na porta 5000'))
