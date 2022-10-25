const models = require('../models')

async function insert(){

    // FILMES 
    
    const corra = await models.filme.create({
        nome: 'Corra',
        diretor: 'Jordan Peele',
        lançamento: 2017,
        atoratriz: 'Daniel Kaluuya',
        genero: 'Suspense, terror',
        orçamento: '$4,500,000.00',
        bilheteria: '$255,407,969.00',
        duração: '1h 44m',
        descricao: 'Agora que Chris e a sua namorada Rose chegaram ao ponto da relação em que se apresenta a família, ela convida-o a passar o fim de semana em casa dos seus pais, Missy e Dean. À primeira vista, Chris vê o comportamento excessivamente condescendente da família como tentativas nervosas de lidar com o relacionamento inter-racial da filha, mas com o avançar do fim de semana, uma série de descobertas, cada vez mais perturbadoras, levam-no a uma verdade que ele nunca poderia imaginar...',


    })

    const klan = await models.filme.create({
        nome: 'Infiltrado na Klan',
        diretor: 'Spike Lee',
        lançamento: 2018,
        atoratriz: 'John David Washington',
        genero: 'Drama, biográfico, policial, suspense',
        orçamento: '$15,000,000.00',
        bilheteria: '$93,400,823.00',
        duração: '2h 15m',
        descricao: 'No início dos anos 70, um período de grande agitação social onde a luta pelos direitos civis vai enfurecendo. Ron Stallworth torna-se o primeiro detetive afro-americano do Departamento da Polícia de Colorado Springs, mas a sua chegada é vista com ceticismo e abre hostilidades nos vários departamentos. Com audácia, Stallworth decide subir a pulso e fazer a diferença na sua comunidade; e é com grande coragem que entra numa perigosa missão: infiltrar-se e expor o Ku Klux Klan.',


    })

    const panteranegra = await models.filme.create({
        nome: 'Pantera Negra',
        diretor: 'Ryan Coogler',
        lançamento: 2018,
        atoratriz: 'Chadwick Boseman',
        genero: 'Ação, aventura, ficção científica',
        orçamento: '$200,000,000.00',
        bilheteria: '$1,347,597,973.00',
        duração: '2h 14m',
        descricao: `Depois da morte do seu pai, rei de Wakanda, o jovem T’Challa regressa à sua casa numa isolada e sofisticada nação africana para suceder ao trono e assumir o seu legítimo lugar enquanto rei. Quando surge um poderoso inimigo, o temperamento de T’Challa como rei — e Black Panther — é posto à prova num tremendo conflito que põe em risco o destino de Wakanda e de todo o mundo. Enfrentando diversos perigos e traições, T'Challa tem de usar todos os poderes do Black Panther para derrotar os seus inimigos e para garantir a vida e a segurança dos habitantes desta nação.`,


    })

    const cidade = await models.filme.create({
        nome: 'Cidade de Deus',
        diretor: 'Fernando Meirelles',
        lançamento: 2002,
        atoratriz: 'Alexandre Rodrigues',
        genero: 'Drama, ação',
        orçamento: '$3,300,000.00',
        bilheteria: '$30,641,770.00',
        duração: '2h 10m',
        descricao: 'Cidade de Deus é uma favela que surgiu nos anos 60, tornando-se um dos lugares mais perigosos do Rio de Janeiro, no começo dos anos 80. Para contar a história deste lugar, o filme narra a vida de diversas personagens, todas apresentadas do ponto de vista do narrador, Buscapé. Buscapé é um menino pobre, negro, muito sensível e bastante amedrontado com a idéia de vir a transformar-se num bandido; mas também, suficientemente inteligente para resignar-se a fazer trabalhos muito duros. Buscapé cresceu num ambiente bastante violento. Apesar de "o mundo estar contra ele", descobre que pode ver a vida com outros olhos, os de um artista. Acidentalmente, torna-se fotógrafo profissional, e liberta-se.',


    })

    const django = await models.filme.create({
        nome: 'Django Livre',
        diretor: 'Quentin Tarantino',
        lançamento: 2012,
        atoratriz: 'Jamie Foxx',
        genero: 'Drama, ação, faroeste',
        orçamento: '$100,000,000.00',
        bilheteria: '$425,000,000.00',
        duração: '2h 45m',
        descricao: 'Django (Jamie Foxx) é um escravo, comprado pelo caçador de recompensas alemão Dr. King Schultz (Christoph Waltz) para auxiliá-lo em uma missão. A dupla acaba fazendo amizade e, após resolver os problemas do caçador, parte em busca por Broomhilda (Kerry Washington), esposa de Django. Para isso, eles devem enfrentar o vilão Calvin Candie (Leonardo DiCaprio), proprietário da escrava.',


    })

    const nos = await models.filme.create({
        nome: 'Nós',
        diretor: 'Jordan Peele',
        lançamento: 2019,
        atoratriz: `Lupita Nyong'o`,
        genero: 'Suspense, ficção científica, terror',
        orçamento: '$20,000,000.00',
        bilheteria: '$255,105,930.00',
        duração: '1h 56m',
        descricao: 'A história, passada nos dias de hoje, segue Adelaide e Gabe Wilson numa viagem à velha casa de infância de Adelaide, junto à praia na Califórnia do Norte, para onde levam os seus filhos a passar o Verão. Depois de um dia na praia com a família Tyler, Adelaide – que é assombrada por um persistente trauma do seu passado – torna-se cada vez mais paranóica, acreditando que algo de mal irá acontecer à sua família. À medida que a noite cai, os Wilsons vêem quatro figuras de mãos dadas em silêncio no final da entrada da sua casa…',


    })

    const comptom = await models.filme.create({
        nome: 'Straight Outta Compton',
        diretor: 'F. Gary Gray',
        lançamento: 2015,
        atoratriz: `O'Shea Jackson Jr (e outros)`,
        genero: 'Drama, biográfico, policial',
        orçamento: '$28,000,000.00',
        bilheteria: '$201,634,991.00',
        duração: '2h 27m',
        descricao: 'Em meados dos anos 80, o grupo NWA, que integra Ice Cube, Dr. Dre e Eazy-E, emerge das ruas perigosas de Los Angeles, Califórnia, para revolucionar a cultura do hip-hop com a sua música e as suas narrativas sobre a vida no bairro.',


    })

    const copiava = await models.filme.create({
        nome: 'O Homem que Copiava',
        diretor: 'Jorge Furtado',
        lançamento: 2003,
        atoratriz: 'Lázaro Ramos',
        genero: 'Drama',
        orçamento: 'R$ 3,000,000.00',
        bilheteria: 'R$ 4,600,000.00',
        duração: '2h 3m',
        descricao: 'O filme, ambientado na zona norte da cidade de Porto Alegre, conta a história de André, um jovem operador de fotocopiadoras que precisa de 38 reais para se aproximar de sua vizinha Sílvia, por quem está apaixonado. Para isso, é ajudado por Cardoso, funcionário de um antiquário, que topa qualquer coisa por dinheiro. Marinês é uma jovem que explora sua sensualidade para ascender na vida, e acaba se identificando com Cardoso.',

    })

    const moonlight = await models.filme.create({
        nome: 'Moonlight: Sob a Luz do Luar',
        diretor: 'Barry Jenkins',
        lançamento: 2017,
        atoratriz: 'Trevante Rhodes',
        genero: 'Drama',
        orçamento: '$4,000,000.00',
        bilheteria: '$65,046,687.00',
        duração: '1h 51m',
        descricao: 'Uma história de ligações humanas e auto-descoberta, o relato da vida de um jovem afro-americano desde a sua infância até à idade adulta, acompanhando a sua luta por encontrar um lugar no mundo à medida que cresce num bairro empobrecido de Miami. O filme é um retrato vital da vida contemporânea da comunidade afro-americana ao mesmo tempo que é uma meditação intensamente pessoal sobre identidade e uma obra revolucionária que reflecte com grande compaixão e verdades universais.',

    })
    const besouro = await models.filme.create({
        nome: 'Besouro',
        diretor: 'João Daniel Tikhomiroff',
        lançamento: 2009,
        atoratriz: 'Aílton Carmo',
        genero: 'Ação, drama biográfico, fantasia',
        orçamento: '$5,000,000.00',
        bilheteria: '--',
        duração: '1h 33m',
        descricao: 'Besouro foi o maior capoeirista de todos os tempos. Um menino que - ao se identificar com o inseto que ao voar desafia as leis da física - desafia ele mesmo as leis do preconceito e da opressão. Passado no Recôncavo dos anos 20, Besouro é um filme de aventura, paixão, misticismo e coragem. Uma história imortalizada por gerações, que chega aos cinemas com ação e poesia no cenário deslumbrante do Recôncavo Baiano.',


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