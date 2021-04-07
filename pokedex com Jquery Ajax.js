


let o = 980
const vet = [];
for(i=0; i<=o; i++){

$.ajax({
url: "https://pokeapi.co/api/v2/pokemon/"+i,
type: "GET",
async:false,
success: function(pokemon){

    let type = pokemon.types.map(o=> o.type.name)
    let dados =   "<li class='card  "+ type[0]+"'> <img class='card-image flying' alt='"+ pokemon.name +"'  src='"+ pokemon.sprites.front_default +"'> <h2 class='card-title'>"+"Nº" + pokemon.id + ". " +  pokemon.name +"</h2> <p class='card-subtitle'>"+ type.join(' | ') + "</p></li>";
    vet.push(dados);

},



vet.forEach(o=>{
     $(".pokedex").append(o);