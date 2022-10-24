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
    .post(async (req, res) => {
        try {
            const filme = new FilmeModels(req.body)
            await filme.save()
    
            res.status(201).send('POST')
        } catch (error) {
            res.send(error)
        }
    })
    .put(async (req, res) => {
        const uuid = req.params.uuid

        if(!uuid) {
            return res.status(400).send({ error: 'ID do filme não encontrado'})
        }
         try {
            const updateFilme = await FilmeModels.update(req.body, {where: { id: uuid}},  {
                new: true,
            });

            console.log(updateFilme)

            if(updateFilme) {
                return res.status(200).send('OK!')
            }

            res.status(400).send({ error: 'Não é possível atualizar o filme'})

         } catch (error) {
            res.send(error)
         }
        })
        .delete(async (req, res) => {
            const uuid = req.params.uuid

           if(!uuid) {
                return res.status(400).send({ error: 'ID do filme não encontrado'})
           }

           try {
            const deleteFilme = await FilmeModels.findAndDelete({where: { id: uuid}})
            if (deleteFilme === 1) {
                return res.send('Deletado')

            }

            res.status(400).send({ error: 'Não foi possível deletar o filme' })

           } catch (error) {
            res.send(error)
           }
        })
        
    
   
}

// userRoute.get('/filmes', async (req, res) => {

//     const query = {};
    
//     try {
//         const filmes = await FilmeModels.findAll(query)
//         res.send({ filmes })

//     } catch (error){
//         res.status(400).send({ error: 'Falha ao encontrar filmes' })
//     }
// })
// userRoute.get('/filmes/:uuid', async (req, res) => {
//     const uuid = req.params.uuid
//     // const query = {}

//     // if (uuid){
//     //     query._uuid = uuid
//     // }

//     try {
//         const filme = await FilmeModels.findOne({ where: { id: uuid}})
      
//         if (filme === null){
//             res.send('Filme não encontrado')
//         } else {res.send({ filme })}
//     }  catch (error){
//         res.status(400).send({ error: 'Falha ao encontrar filmes'})
//     }
// })

// userRoute.post('/filmes', async (req, res) => {
//     try {
//         const filme = new FilmeModels(req.body)
//         await filme.save()

//         res.status(201).send('POST')
//     } catch (error) {
//         res.send(error)
//     }
// })

module.exports = userRoute