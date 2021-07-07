const Person = {
    name: "Gabriel",
    age: 19,
    city: "RJ"
}
// Notação de ponto
console.log(Person.name) // Gabriel

// Notação de Colchete
console.log(Person['age']) // 19

//Como desestruturar objetos

const {name, age, city} = Person // dessa maneira eu só preciso acessar a informação name,age e city

console.log(name)
console.log(age)
console.log(city)