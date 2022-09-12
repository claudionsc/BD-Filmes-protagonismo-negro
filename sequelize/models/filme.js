const Sequelize = require('sequelize')
const sequelize = require('../_database')

// CRIAR TABELA

const Filme = sequelize.define('filme', {
    nome: {
        type: Sequelize.STRING
    },
    diretor: {
        type: Sequelize.STRING
    },
    lançamento: {
        type: Sequelize.INTEGER
    },
    atoratriz: {
        type: Sequelize.STRING
    }
})

module.exports = Filme

// RELAÇÕES

const Diretor = require('./diretor')
Filme.belongsToMany(Diretor, {throush: 'filme_diretor'})