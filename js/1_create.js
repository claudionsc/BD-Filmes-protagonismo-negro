const db = require("./_database");


async function createTables(){
    await db.connect()
    
    // await db.query(`CREATE TABLE listaFilmes(
    //     id serial PRIMARY KEY,
    //     nome VARCHAR(100) UNIQUE NOT NULL,
    //     diretor VARCHAR(100)  NOT NULL,
    //     lançamento integer  NOT NULL,
    //     atoratriz VARCHAR(100)  NOT NULL,
    //     genero VARCHAR(100)  NOT NULL
    // )`)

    // await db.query(`CREATE TABLE listaAtrizAtor(
    //     id serial PRIMARY KEY,
    //     nome VARCHAR(50) UNIQUE NOT NULL,
    // )`)

    // await db.query(`CREATE TABLE listaDir(
    //     id serial PRIMARY KEY,
    //     nome VARCHAR(50) UNIQUE NOT NULL,
    // )`)

    await db.query(`CREATE TABLE diretor_filme(
        diretor_id INTEGER NOT NULL,
        filme_id INTEGER NOT NULL,
        PRIMARY KEY (diretor_id, filme_id),
        FOREIGN KEY (diretor_id) REFERENCES listaDir (id),
        FOREIGN KEY (filme_id) REFERENCES listaFilmes (id)
    )`)
    
    await db.end()

    console.log('Tabela criada')
}

createTables()