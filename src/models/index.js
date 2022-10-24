const sequelize = require('../config/_database')

const models = {
    filme: require('./filme'),
    diretor: require('./diretor'),
    sequelize: sequelize
}

module.exports = models