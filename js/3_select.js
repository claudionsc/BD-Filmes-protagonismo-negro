const db = require('./_database')

async function listData(){
    await db.connect()
    var result  

    // result = await db.query(`SELECT * FROM listaFilmes `)
    // console.log("LISTA DE FILMES")
    // console.log(result.rows)

    // result = await db.query(`SELECT * FROM listaDir `)
    // console.log("LISTA DE DIRETORES")
    // console.log(result.rows)
    

    result = await db.query(`
    SELECT ld.nome AS listaDir, lf.nome AS listaFilmes 
    FROM listaDir AS ld, listaFilmes AS lf, diretor_filme df
    WHERE df.diretor_id = ld.id
    AND df.filme_id = lf.id 

    `)
    console.log("LISTA DE DIRETORES E FILMES")
    console.log(result.rows)
    
    await db.end()
}

listData()