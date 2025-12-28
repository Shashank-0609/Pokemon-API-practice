async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!res.ok){
            throw new Error("Fetching not possible")
        }
        const data = await res.json();
        const pokemon = data.sprites.front_default;
        const pokeimg = document.getElementById("pok_img");

        pokeimg.src = pokemon;
        pokeimg.style.display = "block"
    }
    catch(e){
        console.error(e)
    }
}