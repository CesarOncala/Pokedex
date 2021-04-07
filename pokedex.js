//

// let so pode ser usada dentro que ela foi declarada
// var pode usar em qualquer lugar
// const não pode ser modificada

const catched = [];
let pokedex = 898

const getPokemon = new Promise (async (resolve,reject)=>{

   for(i=1; i<=pokedex; i++){
     await fetch("https://pokeapi.co/api/v2/pokemon/"+i,{
            type: "GET",
            })
            .then((processResult)=>processResult.json())
            .then((pokemon)=>{
                let type = pokemon.types.map(o=> o.type.name)
                let dados =   "<li class='card  "+ type[0]+"'> <img class='card-image flying' alt='"+ pokemon.name +"'  src='"+ pokemon.sprites.front_default +"'> <h2 class='card-title'>"+"Nº" + pokemon.id + ". " +  pokemon.name +"</h2> <p class='card-subtitle'>"+ type.join(' | ') + "</p></li>";
                catched.push(dados)
            }).catch((error)=>{reject(error)})
    }
    resolve("Pokémon Master!")
});

getPokemon.then((o)=>{
 catched.forEach(pokemon=>{
    document.querySelector(".pokedex").innerHTML += pokemon;
 })
}).then(()=>{
    alert("Pokédex Complete!")
})

