const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const mainElement = document.querySelector("main");

function getTrainerData() {
    return fetch("http://localhost:3000/trainers")
    .then(resp => resp.json())
}

function renderTrainer(trainer_object) {

    let divCardElement = document.createElement("div")
    divCardElement.setAttribute("id", trainer_object.id);
    divCardElement.setAttribute("class", "card");
    
    let btnElement = document.createElement("button")
    btnElement.textContent = "Add Pokemon";
    divCardElement.append(btnElement);

    let pokemonPElement = document.createElement("p")
    divCardElement.append(pokemonPElement);

    let listElement = document.createElement("ul")
    divCardElement.append(listElement);

    let pokemons = trainer_object.pokemons;
    pokemons.forEach(pokemon => {
        let liElement = document.createElement("li");
        liElement.textContent = pokemon.nickname + " (" + pokemon.species + ")";
        listElement.append(liElement);
    })
    mainElement.append(divCardElement)
}

document.addEventListener("DOMContentLoaded", (event) => {


console.log(mainElement)
    console.log("page is loaded");
    getTrainerData().then(trainers => {
        trainers.forEach(trainer => {
            renderTrainer(trainer)
        })
    })

})
