//Javascript is a multi paradym programming but it does functional programming much better
// Functional Programming is a design paradim
// OOP is another design paradim

//Fuctional progamming means creating applications with a bunch of functions
//Think of the workflow as a assebly line belt> > > > 


///////////CONVENTIONS OF FUNCTIONAL PROGRAMMING/////////////////////////////////////
//Similar to OOP 4 pillars, when we're talking about funcitonal programming we want to be transparent.
// be pure, don't minipulated the data that is coming in, you have to make a copy and then use the data
// Our functions should have a return value(might end up breaking them when creating react application)

const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


//Above is an arry filled with Objects, every object has a key value pairs, id, name, types


// an array of prokemon object where the is is evenly divisable by 3
let arr = []
for(let i= 0; i < pokemon.length; i ++){
    if(pokemon[i].id % 3 === 0){
        arr.push(pokemon[i])
    }
}

console.log(arr)



//FILTER IS FOR READ
const arr1 = pokemon.filter( (poke) => poke.id % 3 === 0)
console.log(arr1)

const arr2 = pokemon.filter( (poke) => poke.types.length > 1)
console.log("Pokesmons with more than one type: ", arr2)


//MAP IS FOR EDITS
// An Array with just the names of the pokemons
// you can't use commas to add in more attributes like poke.name , poke.type

const arr3 = pokemon.map((poke) => {
    return{
        'name' : poke.name,
        'id' : poke.id
    }
})
console.log(arr3)
// Bottome Example is a one liner without the return statment being made
const arr4 = pokemon.map((poke) => ({'name' : poke.name, 'id' : poke.id}))
console.log(arr4)


//CHAINING FUNCTIONS TOGETHER
//LIKE HAVING ASSEMBLY LINE OF FUNCTIONS
//WE ARE GOING TO COMBINE map and filter to get the result

//an array with just the names of pokemon with an id greater than 99
//we first use the filter function and the map function together.
const arr5 = pokemon.filter( (poke) => poke.id > 99).map( (poke) => poke.name)
console.log(arr5)

//an array with just the names of the pokémon whose only type is poison
const arr6 = pokemon.filter( (poke) => poke.types == 'poison').map( (poke) => poke.name)
console.log(arr6)

