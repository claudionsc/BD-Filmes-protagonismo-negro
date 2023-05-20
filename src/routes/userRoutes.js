const FilmeModels = require('../models/filme')
const Express = require('express')
const cors = require('cors')

const app = Express()
app.use(cors())


const userRoute = (app) => {

    app.route('/filmes/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {

                try {
                    const filme = await FilmeModels.findByPk(id)

                    if (filme === null) {
                        res.send('Filme não encontrado')
                    } else {
                        res.send({ filme })
                    }
                } catch (error) {
                    res.status(400).send({ error: 'Falha ao encontrar filmes' })
                }

            } else {
                try {
                    const filmes = await FilmeModels.findAll(query)
                    res.send({ filmes })

                } catch (error) {
                    res.status(400).send({ error: 'Falha ao encontrar filmes' })
                }
            }
        })
        .post(async (req, res) => {
            try {
                const filmes = new FilmeModels(req.body)
                await filmes.save()

                res.status(201).send('POST')
            } catch (error) {
                res.send('Não é permitido inserir dados nulos')
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'ID não encontrado' })
            }
            try {
                const updateFilme = await FilmeModels.update(req.body, {
                    where: { id: id }
                })


                if (updateFilme) {
                    const updateFilme = await FilmeModels.findOne({ where: { id: id } });
                    console.log(updateFilme)
                    return res.status(200).send('OK!')
                }

                res.status(400).send({ error: 'Não é possível atualizar o filme' })

            } catch (error) {
                res.send(error)
            }
        })
        .delete(async (req, res) => {
            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'ID não encontrado' })
            }

            try {
                const deleteFilme = await FilmeModels.destroy({
                    where: { id: id }
                })
                if (deleteFilme) {
                    return res.send('Deletado')
                }

                res.status(400).send({ error: 'Não foi possível deletar o filme' })

            } catch (error) {
                res.send(error)
            }
        })

}


module.exports = userRoute