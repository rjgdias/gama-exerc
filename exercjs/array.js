const alunosGama = ["Paulo", "Mario", "Gustavo", "Rodrigo"]

// Acessar informações num array
// console.log(alunosGama[3]) // Rodrigo

// Operador spread (...)
const alunosXP = [...alunosGama, "Rodolfo"]

console.log(alunosXP)

// Metodos de iteração
// MAP
alunosXP.map(aluno => console.log(aluno)) // maneira reduzida

//Filter
const numeros = [34,45,67,90,55,77]

const numerosImpares = numeros.filter(numero => numero%2 !=0) // me retorna os numeros impares 
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 == 0) // me retorna os numeros pares
console.log(numerosPares)

// for (let i = 0; i < alunosXP.length ; i++){
//     console.log(alunosXP[i])
// }
const produtos = ["fogao", "geladeira", "cama", "mesa"]

//find

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)

const encontraMesa = produtos.find(produto => produto === "mesa")
console.log(encontraMesa)

//sort - ordenação

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosOrdenadosDecrescente)

//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1,34,35]
const soma = numbers.reduce((ValorAnterior, ValorAtual)=>{
    return ValorAnterior + ValorAtual
},5)
console.log(soma)// esperando receber 75, no caso a soma do array 1 + 34 + 35 + 5, o 5 é por conta do final