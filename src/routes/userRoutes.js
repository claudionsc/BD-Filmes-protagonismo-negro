const FilmeModels = require('../models/filme')
const Express = require('express')
const cors = require('cors')

const app = Express()
app.use(cors())


const userRoute = (app) => {
    app.route('/filmes/:id?')
    .get(async (req, res) => {

    })
    .post(async (req, res) => {
        
    })
    .put(async (req, res) => {

    })
    .delete(async (req, res) => {

    })
}

module.exports = userRoute