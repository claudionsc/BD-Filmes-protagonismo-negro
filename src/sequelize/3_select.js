const { diretor, filme } = require('./models')
const models = require('./models')
// const Diretor = require('./models/diretor')

async function select(){
    console.log('\n')

    // SELECIONANDO DIRETORES 

    const diretors = await models.diretor.findAll()
    diretors.forEach((diretor) => {
        console.log("Diretores", diretor.nome)
    })
    console.log('\n')

    // SELECIONANDO FILMES 

    const filmes = await models.filme.findAll()
    filmes.forEach((filme) => {
        console.log('Filmes', filme.nome)
    })
    console.log('\n')

    // SELECIONANDO FILMES E DIRETORES 
    const filmesDiretores = await models.diretor.findAll({
        include: [
            {
                model: models.filme
            }
        ]
    })

    filmesDiretores.forEach((diretor) => {
        console.log('Diretor', diretor.nome)
        diretor.filmes.forEach((filme) => {
            console.log('----> Filmes: ', filme.nome)
        })
    })
    await models.sequelize.close()

}

select()