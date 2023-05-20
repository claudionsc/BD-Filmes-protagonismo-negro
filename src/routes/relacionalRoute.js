const FilmeModels = require('../models/filme')
const DiretorModels = require('../models/diretor')
const Express = require('express')

const cors = require('cors')

const app = Express()
app.use(cors())

const relacionalRoute = (app) => {
    app.route('/diretor/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {
                
                try {
                    const diretor = await DiretorModels.findByPk(id, {include: { association: 'filmes' }})

                    if (diretor === null) {
                        res.send('Diretor não encontrado')
                    } else {
                        res.send({ diretor })
                    }
                } catch (error) {
                    res.status(400).send({ error: 'Falha ao encontrar diretor' })
                }

            }
            else {
                try {
                    const diretores = await DiretorModels.findAll(query)
                    res.send({ diretores })

                } catch (error) {
                    res.status(400).send({ error: 'Falha ao encontrar diretores' })
                }
            }

        })
        .post(async (req, res) => {
            try {
                const diretor = new DiretorModels(req.body)
                await diretor.save()

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
                const updateDiretor = await DiretorModels.update(req.body, {
                    where: { id: id }
                })


                if (updateDiretor) {
                    const updateDiretor = await DiretorModels.findOne({ where: { id: id } });
                    console.log(updateDiretor)
                    return res.status(200).send('OK!')
                }

                res.status(400).send({ error: 'Não é possível atualizar o diretor' })

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
                const deleteDiretor = await DiretorModels.destroy({
                    where: { id: id }
                })
                if (deleteDiretor) {
                    return res.send('Deletado')
                }

                res.status(400).send({ error: 'Não foi possível deletar o diretor' })

            } catch (error) {
                res.send(error)
            }
        })

}

module.exports = relacionalRoute