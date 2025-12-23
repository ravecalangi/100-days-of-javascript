const inputBtn = document.getElementById("input");
const fetchBtn = document.getElementById("fetch-btn");

let pokemonDivImg = document.getElementById("pokemon-img");
let pokemonContainer = document.querySelector(".pokemon-container");
const pokemonImgContainer = document.querySelector(".pokemon-img-container");

const pokemonDes = document.getElementById("pokemon-description");

const wrapperDiv = document.querySelector(".wrapper");

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

async function fetchPokemon(pokemon) {

    if (!pokemon) {

        alert("Please enter a Pokémon name first.");
        return;
        
    }

    const response = await fetch(apiUrl + pokemon.toLowerCase());

    if (response.status === 404) {

        alert("Sorry, we can't find that Pokémon. Please try again.");

    } else {

        wrapperDiv.classList.add("wrapper-active");

        const data = await response.json();

        const pokemonImg = data.sprites.front_default || "";

        pokemonDivImg.src = pokemonImg;

        const types = data.types;

        types.forEach(ty => {

            const div = document.createElement("div");
            div.textContent = ty.type.name;
            
            pokemonContainer.appendChild(div);

        });

    }
}

fetchBtn.addEventListener("click", () => {

    wrapperDiv.classList.remove("wrapper-active");
    
    pokemonContainer.innerHTML = ""; // clears the Pokemon types in the container
    fetchPokemon(input.value);

    input.value = "";

});

inputBtn.addEventListener("keydown", (e) => {

    wrapperDiv.classList.remove("wrapper-active");

    if (e.key === "Enter") {
        
        fetchPokemon(input.value);
        input.value = "";
    }
    
});

