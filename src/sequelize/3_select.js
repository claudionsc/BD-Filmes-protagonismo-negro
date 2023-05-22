const { diretor, filme } = require('../models')
const models = require('../models')
// const Diretor = require('./models/diretor')

async function select(){
    console.log('\n')

    // SELECIONANDO FILMES 

    const filmes = await models.filme.findAll()
    filmes.forEach((filme) => {
        console.log('Filmes', filme.nome)
    })
    console.log('\n')



}

select()