const Sequelize = require('sequelize')
const sequelize = require('../_database')

const Diretor = sequelize.define('diretor', {
    nome: {
        type: Sequelize.STRING
    }
})

module.exports = Diretor

const Filme = require('./filme')
Diretor.belongsToMany(Filme, {through: 'filme_diretor'})