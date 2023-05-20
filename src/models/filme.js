const Sequelize = require('sequelize')
const sequelize = require('../config/_database')

// CRIAR TABELA

const FilmeModels = sequelize.define('filme', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    diretor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lançamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    atoratriz: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    orçamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bilheteria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duração: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(1000),
        allowNull: false
    },
    img: {
        type: Sequelize.STRING(5000),
        allowNull: false
    }, 
    img2: {
        type: Sequelize.STRING(5000),
        allowNull: false
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