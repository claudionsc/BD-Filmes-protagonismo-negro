const db = require("./_database");


async function createTables(){
    await db.connect()
    
    await db.query(`CREATE TABLE listaFilmes(
        id serial PRIMARY KEY,
        nome VARCHAR(100) UNIQUE NOT NULL,
        diretor VARCHAR(100)  NOT NULL,
        lançamento integer  NOT NULL,
        atoratriz VARCHAR(100)  NOT NULL,
        genero VARCHAR(100)  NOT NULL
    )`)

    await db.query(`CREATE TABLE listaAtrizAtor(
        id serial PRIMARY KEY,
        nome VARCHAR(50) UNIQUE NOT NULL,
        idade date NOT NULL,
        sexo VARCHAR(3)  NOT NULL 
    )`)

    await db.query(`CREATE TABLE listaDir(
        id serial PRIMARY KEY,
        nome VARCHAR(50) UNIQUE NOT NULL,
        idade date NOT NULL,
        sexo VARCHAR(3)  NOT NULL 
    )`)
    
    await db.end()

    console.log('Tabela criada')
}

createTables()