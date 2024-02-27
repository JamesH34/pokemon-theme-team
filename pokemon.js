const getTeam = async (event) =>{
    try{
        let randomNum = Math.floor(Math.random()*1302)
        console.log(randomNum)
        let allPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        let allFormatted = await allPokemon.json()
        let randomPokemonUrl = allFormatted.results[randomNum-1].url 
        let randomPokemon = await fetch(randomPokemonUrl)
        let randomFormatted = await randomPokemon.json()
        let randomPokemonImg = randomFormatted.sprites.front_default
        let pokemonType = randomFormatted
        console.log(randomFormatted.types)
        console.log(randomFormatted.types.length)
        if (randomFormatted.types.length == 1) {
            let typeA = randomFormatted.types[0].type.name
            console.log(typeA)
        } else if (randomFormatted.types.length == 2) {
            let typeA = randomFormatted.types[0].type.name
            let typeB = randomFormatted.types[1].type.name
            console.log(typeA)
            console.log(typeB)
        }
        
        
        // console.log(typeA, typeB)

        let div = document.getElementById('imgContainer')

        let img = document.createElement('img')
        img.src = randomPokemonImg
        div.appendChild(img)
        
        
    }

    catch(err){
        console.log(err.message)
    }

}

getTeam()

// https://pokeapi.co/api/v2/pokemon
