const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function getTrainerData() {
    return fetch("http://localhost:3000/trainers")
    .then(resp => resp.json())
}

function renderTrainer(trainer_object) {
    let mainElement = document.querySelector("main");
    let divCardElement = document.createElement("div")

}

document.addEventListener("DOMContentLoaded", (event) => {

    console.log("page is loaded");
    getTrainerData().then(trainers => {
        trainers.forEach(trainer => {
            renderTrainer(trainer)
        })
    })

})
