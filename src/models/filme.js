const Sequelize = require('sequelize')
const sequelize = require('../config/_database')

// CRIAR TABELA

const FilmeModels = sequelize.define('filme', {
    nome: {
        type: Sequelize.STRING,
        unique: true
    },
    diretor: {
        type: Sequelize.STRING
    },
    lançamento: {
        type: Sequelize.INTEGER
    },
    atoratriz: {
        type: Sequelize.STRING
    },
    genero: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING
    } 
})


const init = async () => {
    await FilmeModels.sync()
}

init()

module.exports = FilmeModels
// RELAÇÕES

const DiretorModel = require('./diretor')
FilmeModels.belongsToMany(DiretorModel, {through: 'filme_diretor'})