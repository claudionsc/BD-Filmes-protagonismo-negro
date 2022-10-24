const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'bd-filmes-negros',
    username: 'postgres',
    password: 'admin',
    dialect: 'postgres',
    port: 5432,
    logging: false
})

module.exports = sequelize

// TESTE DB CONNECTION 

async function test(){
    try{
        let result = await sequelize.authenticate()
        console.log("-->CONECTADO!<--")
    }
    catch(error){
        console.error("-->FALHA!<--")
        console.error(error)
        process.exit()
    }
}
test()