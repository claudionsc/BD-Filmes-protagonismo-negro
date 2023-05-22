const sequelize = require('../config/_database')

const models = {
    filme: require('./filme'),
    sequelize: sequelize,

}

module.exports = models