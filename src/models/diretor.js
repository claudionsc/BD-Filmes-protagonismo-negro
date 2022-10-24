const Sequelize = require('sequelize')
const sequelize = require('../config/_database')

const DiretorModel = sequelize.define('diretor', {
    nome: {
        type: Sequelize.STRING
    }
})


const init = async () => {
    await DiretorModel.sync()
}

init()
module.exports = DiretorModel

const FilmeModels = require('./filme')
DiretorModel.belongsToMany(FilmeModels, {through: 'filme_diretor'})