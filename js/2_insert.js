const db = require('./_database')

async function insertData(){
    await db.connect()

    const queryFilmes = (`INSERT INTO listaFilmes (nome,diretor,lançamento,atoratriz,genero) VALUES($1, $2, $3, $4, $5)`)

    await db.query (queryFilmes, ['Corra', 'Jordan Peele', 2017, 'Daniel Kaluuya', 'Suspense, terror'])
    await db.query (queryFilmes, ['Infiltrado na Klan', 'Spike Lee ', 2018, 'John David Washington', 'Drama, biográfico, policial, suspense'])
    await db.query (queryFilmes, ['Pantera Negra', 'Ryan Coogler', 2018, 'Chadwick Boseman', 'Ação, aventura, ficção científica'])
    await db.query (queryFilmes, ['Cidade de Deus', 'Fernando Meirelles', 2002, 'Alexandre Rodrigues', 'Drama, ação'])
    await db.query (queryFilmes, ['Django Livre', 'Quentin Tarantino', 2012, 'Jamie Foxx', 'Ação, drama, faroeste'])
    await db.query (queryFilmes, ['Nós ', 'Jordan Peele', 2019 , 'Lupita Nyongo', 'Suspense, ficção científica, terror'])
    await db.query (queryFilmes, [' Straight Outta Compton', 'F. Gary Gray', 2015, 'OShea Jackson Jr (e outros) ', ' Drama, biográfico, policial'])
    await db.query (queryFilmes, ['O Homem que Copiava', 'Jorge Furtado', 2003, 'Lázaro Ramos', 'Drama'])
    await db.query (queryFilmes, ['Moonlight: Sob a Luz do Luar', 'Barry Jenkins', 2017, 'Trevante Rhodes', 'Drama'])
    await db.query (queryFilmes, ['Besouro ', 'João Daniel Tikhomiroff', 2009 , 'Aílton Carmo', ' Ação, drama biográfico, fantasia'])
    
    await db.end()
    console.log('Dados inseridos corretamente')
}

insertData()