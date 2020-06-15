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
        //reset the shown Game Box:
        document.getElementById("shown-game").innerHTML = ""

        //need hide/reset the create new game
        let gameTitle = document.getElementById("game-title")
        gameTitle.innerText = `Showing Game: ${this.name}`
        //* this.gameCharacterOptions()
        document.getElementById("container-games").innerHTML = ""
        this.charaters.forEach(character => {
            let characterHtml = `
                <div class="grid-item-game">
                
                <input type="text" id="game-name" name="game_name" placeholder="Enter Player Name.">
                <div id="counter-${character.id}">0</div>
                <input class="counter-btn-heal" id="heal-btn-${character.id}" type="button" value="Heal(+1)">
                <input class="counter-btn-attack" id="attack-btn-${character.id}" type="button" value="Attacked(-1)">
                <img id="${character.id}" name="${character.description}" src="${character.image}" height="500" width="250"></img>
                
                </div>
                `
            document.getElementById("container-games").innerHTML += characterHtml

            let CreateGameForm = document.getElementById("create-game-form")
            CreateGameForm.reset()

            //this.getUserGames()
                
        })

        
        let characterHealButtons = document.querySelectorAll(".counter-btn-heal")
        //console.log(characterHealButtons)
        characterHealButtons.forEach(button => {
            let buttonId = button.id.slice(-1) //string id number
            button.addEventListener('click', (e) => {
                e.preventDefault()
                this.playHealSound()
                let characterPoints = parseInt(document.getElementById("counter-" + `${buttonId}`).innerHTML)
                let newPoints = characterPoints += 1
                document.getElementById("counter-" + `${buttonId}`).innerHTML = newPoints
            })
        })

        let characterAttackButtons = document.querySelectorAll(".counter-btn-attack")
        //console.log(characterAttackButtons)
        characterAttackButtons.forEach(button => {
            let buttonIdA = button.id.slice(-1) //string id number
            button.addEventListener('click', (e) => {
                e.preventDefault()
                this.playAttackSound()
                let characterPointsA = parseInt(document.getElementById("counter-" + `${buttonIdA}`).innerHTML)
                let newPointsA = characterPointsA -= 1
                document.getElementById("counter-" + `${buttonIdA}`).innerHTML = newPointsA
            })
        })

        const characterImages = document.querySelectorAll(".grid-container-games .grid-item-game img")
        characterImages.forEach(character => {
            character.addEventListener("dblclick", (e) =>{
                //this.clickingWinner(e)
                e.preventDefault()
                this.playWinnerSound()


            })
        })


       let deleteGameButton = document.createElement("input")
       deleteGameButton.setAttribute("class","submit-btn")
       deleteGameButton.setAttribute("id", "game-delete-btn")
       deleteGameButton.setAttribute("type", "submit")
       deleteGameButton.setAttribute("value", "Delete This Game")
       document.getElementById("shown-game").appendChild(deleteGameButton)


        deleteGameButton.addEventListener('click', (e)=>{
            this.deleteGame(e)
            //User.current.fetchGamesAfterDeletion()
        })

    } //end of rendergamedisplay


    deleteGame(e){
        e.preventDefault
        let gameDataForDelete = {game_id: this.id}
        let configObj = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(gameDataForDelete)
        }; 
        fetch("http://localhost:3000/games/" + `${this.id}`, configObj)
        .then(function(response) {
            return response.json();
        })
        //configAdapter.post(`/games/`+ `${this.id}`, configObj)
        .then(function(json) {
            console.log(json);})

        document.getElementById("container-games").innerHTML = ""
        //document.getElementById("list-user-games").options[this.id]
        //User.current.getUserGames()
        //need to either remove selection or redo the fetch..
        //User.current.fetchGamesAfterDeletion()
        let gameToDelete = User.current.games.find(element => element.id == this.id)
        let indexOfGameToDelete = User.current.games.indexOf(gameToDelete)
        User.current.games.splice(indexOfGameToDelete, 1)
        console.log(User.current.games)

        let gameTitle = document.getElementById("game-title")
        gameTitle.innerText = ""

        let buttonToRemove = document.getElementById("shown-game")
        buttonToRemove.innerHTML = ""

        User.current.getUserGames()
        // NEED to clear game name displayed

    }

   playAttackSound(){
       //var attackSound = new Audio("./css/sounds/zapslpat_laser.mp3")
       let attackSound = new Audio("../track_attack_frontend/css/sounds/zapsplat_laser.mp3")
       //attackSound.currentTime = 0;
       attackSound.play()
   }

   playHealSound(){
    let healSound = new Audio("../track_attack_frontend/css/sounds/zapsplat_ascend.mp3")
    healSound.play()
   }

   playWinnerSound(){
    let winnerSound = new Audio("../track_attack_frontend/css/sounds/zapslpat_arcade.mp3")
    winnerSound.play()
   }
    
    //clear game dashboard
    //get user games again...

    clickingWinner(e){
        e.preventDefault()
        console.log("clicked")
    }

    
}