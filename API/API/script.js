document.addEventListener("DOMContentLoaded", () => {
    const pokemonContainer = document.getElementById('pokemonContainer');
    const pokemonInput = document.getElementById('pokemonInput');
    const btnBuscar = document.getElementById('btnBuscar');
    const API_URL = "https://pokeapi.co/api/v2/pokemon/";

    // 1. Fetch con .then()
    function fetchPokemonData(nombreOId) {
        return fetch(`${API_URL}${String(nombreOId).toLowerCase()}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Pokémon no encontrado");
                }
                return response.json();
            })
            .catch(error => {
                console.error("Error:", error);
                return null;
            });
    }

    // 2. Crear card
    function createPokemonCard(pokemon) {
        const cardHtml = `
            <div class="col">
                <div class="card h-100 text-center">
                    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.name}</h5>
                        <p class="card-text">
                            <strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}<br>
                            <strong>Peso:</strong> ${pokemon.weight / 10} kg
                        </p>
                    </div>
                </div>
            </div>
        `;
        pokemonContainer.innerHTML += cardHtml;
    }

    // 3. Carga inicial
    function loadInitialPokemon() {
        pokemonContainer.innerHTML = "";

        for (let i = 1; i <= 21; i++) {
            fetchPokemonData(i).then(pokemon => {
                if (pokemon) createPokemonCard(pokemon);
            });
        }
    }

    // 4. Búsqueda
    btnBuscar.addEventListener('click', () => {
        const query = pokemonInput.value.trim();

        if (query === "") {
            loadInitialPokemon();
            return;
        }

        pokemonContainer.innerHTML = "";

        fetchPokemonData(query).then(pokemon => {
            if (pokemon) {
                createPokemonCard(pokemon);
            } else {
                pokemonContainer.innerHTML = `<p class="text-center w-100">No se encontró ningún Pokémon con ese nombre.</p>`;
            }
        });
    });

    // Ejecutar al inicio
    loadInitialPokemon();
});

const typeColors = {
    fire: "#ff6b6b",
    water: "#4dabf7",
    grass: "#69db7c",
    electric: "#ffd43b",
    psychic: "#f783ac",
    ice: "#74c0fc",
    dragon: "#9775fa",
    dark: "#495057",
    fairy: "#faa2c1",
    normal: "#ced4da"
};

function createPokemonCard(pokemon) {
    const type = pokemon.types[0].type.name;
    const bgColor = typeColors[type] || "#ffffff";

    const cardHtml = `
        <div class="col">
            <div class="card h-100 text-center" style="background:${bgColor}33;">
                <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
                <div class="card-body">
                    <h5 class="card-title">${pokemon.name}</h5>
                    <p class="card-text">
                        <strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}<br>
                        <strong>Peso:</strong> ${pokemon.weight / 10} kg
                    </p>
                </div>
            </div>
        </div>
    `;
    pokemonContainer.innerHTML += cardHtml;
}
function createPokemonCard(pokemon) {
    const cardHtml = `
        <div class="col">
            <div class="pokemon-card">
                <div class="pokemon-card-inner">
                    
                    <!-- FRONT -->
                    <div class="pokemon-card-front">
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                        <h5>${pokemon.name}</h5>
                    </div>

                    <!-- BACK -->
                    <div class="pokemon-card-back">
                        <h5>${pokemon.name}</h5>
                        <p><strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
                        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
                        <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
                    </div>

                </div>
            </div>
        </div>
    `;
    pokemonContainer.innerHTML += cardHtml;
}