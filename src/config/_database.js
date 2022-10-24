require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
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