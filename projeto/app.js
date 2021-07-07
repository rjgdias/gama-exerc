const livros = require('./database')
// console.log(livros)

// pegar o input
const readline = require('readline-sync') // agora consigo acessar tudo que a biblioteca disponibiliza através da readline

const entradaInicial = readline.question('Deseja buscar um livro? S/N ') // propriedade nativa do readline e serve para fazer perguntas e receber a resposta da pessoa usuaria 

// se for sim, mostra as categorias disponiveis e pergunta qual categoria quer
if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis.')
    console.log('Produtividade', '/História brasileira','/Américas','/Estilo de vida','/Tecnologia','/Romance')
    const respostaCat = readline.question('Qual categoria deseja? ')

    const retorno = livros.filter(livro => livro.categoria === respostaCat) // dessa forma conseguimos percorrer todo banco de dados e pegar somente a resposta dada pelo usuario
    console.table(retorno)

} else { // se for não, mostra todos os livros em ordem crescente pela quantidade de páginas
    const livrosOrd = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são todos os livros disponiveis: ')
    console.table(livrosOrd)
}


