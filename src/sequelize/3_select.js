const { diretor, filme } = require('../models')
const models = require('../models')
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

    const array = [];


    filmesDiretores.forEach((diretor) => {
        function Filmes(){
            let fil = []
            diretor.filmes.forEach((filme) => {
             let arr = fil.push(filme.nome)
            })
            return fil
        }

        const map = {
            Diretor: diretor.nome,
            Filmes: Filmes(),
        }
        
       array.push(map)

       
    })
    console.table(array)
    await models.sequelize.close()

}

select()