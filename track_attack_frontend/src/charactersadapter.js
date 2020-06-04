class CharactersAdapter {

    constructor(){
        this.allCharactersArray = []
    }

    getAllCharacters(){
        fetch("http://localhost:3000/characters")
        .then(res => res.json())
        .then(function(json){
            json.data.forEach(character => {
                let newCharacter = new Character(character)
                //this.allCharactersArray.push(newCharacter)
                newCharacter.renderCharacterCheckbox()
            

            //     let characterOption = `
            //     <label>
            //         <input type="checkbox" id="${character.id}-option" name="${character.id}">
            //         ${character.description}
            //     </label>
            // `
            // document.getElementById("create-game-characters").innerHTML += characterOption
            })
        })
    }







}