const { diretor, filme } = require('../models')
const models = require('../models')

async function deletar(){
    await models.filme.destroy( {where: {},
        truncate: true})
    await models.diretor.destroy( {where: {}})
}

deletar()