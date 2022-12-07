const Sequelize = require('sequelize')
const connection = require('../config/_database')

// CRIAR TABELA

const FilmeModels = connection.define('filme', {
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
    orçamento: {
        type: Sequelize.STRING
    },
    bilheteria: {
        type: Sequelize.STRING
    },
    duração: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING(1000)
    },
    img: {
        type: Sequelize.STRING(5000)
    }, 
    img2: {
        type: Sequelize.STRING(5000)
    } 
})


const init = async () => {
    await FilmeModels.sync()
}

init()

module.exports = FilmeModels
