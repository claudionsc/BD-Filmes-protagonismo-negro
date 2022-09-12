const models = require('./models')

async function insert(){

    // FILMES 
    
    const corra = await models.filme.create({
        nome: 'Corra',
        diretor: 'Jordan Peele',
        lançamento: 2017,
        atoratriz: 'Daniel Kaluuya',
        genero: 'Suspense, terror'
    })

    const klan = await models.filme.create({
        nome: 'Infiltrado na Klan',
        diretor: 'Spike Lee',
        lançamento: 2018,
        atoratriz: 'John David Washington',
        genero: 'Drama, biográfico, policial, suspense'
    })

    const panteranegra = await models.filme.create({
        nome: 'Pantera Negra',
        diretor: 'Ryan Coogler',
        lançamento: 2018,
        atoratriz: 'Chadwick Boseman',
        genero: 'Ação, aventura, ficção científica'
    })

    const cidade = await models.filme.create({
        nome: 'Cidade de Deus',
        diretor: 'Fernando Meirelles',
        lançamento: 2002,
        atoratriz: 'Alexandre Rodrigues',
        genero: 'Drama, ação'
    })

    const django = await models.filme.create({
        nome: 'Django Livre',
        diretor: 'Quentin Tarantino',
        lançamento: 2012,
        atoratriz: 'Jamie Foxx',
        genero: 'Drama, ação, faroeste'
    })

    const nos = await models.filme.create({
        nome: 'Nós',
        diretor: 'Jordan Peele',
        lançamento: 2019,
        atoratriz: `Lupita Nyong'o`,
        genero: 'Suspense, ficção científica, terror'
    })

    const comptom = await models.filme.create({
        nome: 'Straight Outta Compton',
        diretor: 'F. Gary Gray',
        lançamento: 2015,
        atoratriz: `O'Shea Jackson Jr (e outros)`,
        genero: 'Drama, biográfico, policial'
    })

    const copiava = await models.filme.create({
        nome: 'O Homem que Copiava',
        diretor: 'Jorge Furtado',
        lançamento: 2003,
        atoratriz: 'Lázaro Ramos',
        genero: 'Drama'
    })

    const moonlight = await models.filme.create({
        nome: 'Moonlight: Sob a Luz do Luar',
        diretor: 'Barry Jenkins',
        lançamento: 2017,
        atoratriz: 'Trevante Rhodes',
        genero: 'Drama'
    })
    const besouro = await models.filme.create({
        nome: 'Besouro',
        diretor: 'João Daniel Tikhomiroff',
        lançamento: 2009,
        atoratriz: 'Aílton Carmo',
        genero: 'Ação, drama biográfico, fantasia'
    })

    // DIRETORES 

    const jordan = await  models.diretor.create({
        nome: 'Jordan Peele'
    })
    const spike = await  models.diretor.create({
        nome: 'Spike Lee'
    })
    const ryan = await  models.diretor.create({
        nome: 'Ryan Coogler'
    })
    const meirelles = await  models.diretor.create({
        nome: 'Fernando Meirelles'
    })
    const tarantino = await  models.diretor.create({
        nome: 'Quentin Tarantino'
    })
    const Gary = await  models.diretor.create({
        nome: 'F. Gary Gray'
    })
    const furtado = await  models.diretor.create({
        nome: 'Jorge Furtado'
    })
    const jenkins = await  models.diretor.create({
        nome: 'Barry Jenkins'
    })
    const joao = await  models.diretor.create({
        nome: 'João Danielk Tikhomiroff '
    })

    // DIRETORES EM FILMES 
    await jordan.setFilmes([corra, nos])
    await spike.setFilmes([klan])
    await ryan.setFilmes([panteranegra])
    await meirelles.setFilmes([cidade])
    await tarantino.setFilmes([django])
    await Gary.setFilmes([comptom])
    await furtado.setFilmes([copiava])
    await jenkins.setFilmes([moonlight])
    await joao.setFilmes([besouro])



    console.log('-->INSERIDOS<--')
}
insert()