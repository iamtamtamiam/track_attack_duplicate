class CharactersAdapter {

    getAllCharacters(){
        fetch("http://localhost:3000/characters")
        .then(res => res.json())
        .then(function(json){
            json.forEach(character => {
            let characterOption = `
                <label>
                    <input type="checkbox" id="${character.id}-option" name="${character.id}">
                    ${character.description}
                </label>
            `
            document.getElementById("create-game-characters").innerHTML += characterOption
            })
        })
    }







}