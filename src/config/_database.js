
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'postgres',
  port: '5432',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  logging: true,
  define: {
  timestaps: true,
  underscored: true,

}},
)
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