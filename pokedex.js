//

// let so pode ser usada dentro que ela foi declarada
// var pode usar em qualquer lugar
// const não pode ser modificada

let o = 15
for(i=0; i<o; i++){

$.ajax({
url: "https://pokeapi.co/api/v2/pokemon/"+i,
type: "GET",
success: function(pokemon){
console.log(pokemon)


 $("#temosquepegar").append("<img align='center' src='"+pokemon.sprites.front_default+"'>" 
  + "Nome: " + pokemon.name + " Tipo: " + pokemon.types[0].type.name  ) 
  $("#temosquepegar").append("<img align='center' src='"+pokemon.sprites.back_default+"'>"  ) 

}
});

}