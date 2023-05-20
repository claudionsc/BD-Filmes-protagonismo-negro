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
}

module.exports = relacionalRoute