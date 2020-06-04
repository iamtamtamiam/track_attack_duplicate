class Game {
    constructor(gameJson){
        this.id = gameJson["data"]["id"]
        this.user_id = gameJson["data"]["attributes"]["user"]["id"]
        //this.user = gameJson["game"]["user"]
        this.name = gameJson["data"]["attributes"]["name"]
        this.selections = gameJson["data"]["attributes"]["selections"]
        this.charaters = gameJson["data"]["attributes"]["characters"]
        this.selectionAdapter = new SelectionAdapter
    }

    
    renderGameDisplay(){
        //need hide/reset the create new game
        let gameTitle = document.getElementById("game-title")
        gameTitle.innerText = `Game: ${this.name}`
        //* this.gameCharacterOptions()
        document.getElementById("found-character-images").innerHTML = ""
        this.charaters.forEach(character => {
            let characterHtml = `
                <div class="found-character">
                <input type="text" id="game-name" name="game_name" placeholder="Enter Player Name.">
                <div id="counter-${character.id}">0</div>
                <input class="counter-btn" id="heal-btn-${character.id}" type="button" value="Heal(+1)">
                <input class="counter-btn" id="attack-btn" type="button" value="Attacked(-1)">
                <img id="${character.id}" name="${character.description}" src="${character.image}" height="500" width="250"></img>
                </div>
                `
            document.getElementById("found-character-images").innerHTML += characterHtml

            let CreateGameForm = document.getElementById("create-game-form")
            CreateGameForm.reset()

            //this.getUserGames()

        })


        // let returnedCharacters = this.gameCharacterOptions()
        // this.charaters.push(returnedCharacters)
        // console.log(this.charaters)
        
        // this.getSelectedCharacters()

    } //end of rendergamedisplay


    


    // getUser(){
    // return User.all.find(user => user.id === this.user_id)
    // }



}