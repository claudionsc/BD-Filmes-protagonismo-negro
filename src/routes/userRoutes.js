const FilmeModels = require('../models/filme')
const Express = require('express')
const cors = require('cors')
const Router = require('express')

const app = Express()
app.use(cors())


// const userRoute = Router()

const userRoute = (app) => {

    app.route('/filmes/:uuid?')
        .get( async (req, res) => {
        const uuid = req.params.uuid
        const query = {};
        
        if(uuid){

            try {
                const filme = await FilmeModels.findOne({ where: { id: uuid}})
              
                if (filme === null){
                    res.send('Filme não encontrado')
                } else {res.send({ filme })}
            }  catch (error){
                res.status(400).send({ error: 'Falha ao encontrar filmes'})
            }
            
        } else {
        try {
            const filmes = await FilmeModels.findAll(query)
            res.send({ filmes })
    
        } catch (error){
            res.status(400).send({ error: 'Falha ao encontrar filmes' })
        }}
    })
    
}


module.exports = userRoute