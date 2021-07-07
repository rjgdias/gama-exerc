const films = [
    {
        id: 1,
        title: "A viagem de Chihiro",
        description: "Animation",
        duration: 120
    },
    {
        id: 2,
        title: "US",
        description: "Horror",
        duration: 120
    },
    {
        id: 3,
        title: "Castelo Animado",
        description: "Animation",
        duration: 120
    },
]

// const [{id,title,description,duration}] = films // objeto desestruturado

films.map(films => console.log(films.title)) // assim retorna cada TITLE do array films