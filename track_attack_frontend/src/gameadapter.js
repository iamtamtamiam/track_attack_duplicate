class GameAdapter {
    //use userjson to create new GamesAdapeter
    
    //fetch individual game localhost/games
    //constructor(){
    //    this.selectionAdapter = new SelectionAdapter
    //}
    

    getIdForRender(gameOptionId){
        //use the game.id from users
        //to fetch the json of the game
        // in games_controller show?
        //then use that json for new Game
        //to render the game...
        console.log("this is the game optionid in adapter")
        console.log(gameOptionId)

        fetch("http://localhost:3000/games/" + `${gameOptionId}`)
        .then(response => response.json())
        .then(gameJson => {
            console.log(gameJson)
            let gameToRender = new Game(gameJson)
            gameToRender.renderGameDisplay()
            //need to fix json of the game class constructor
        })

    }



    postGame(gameNameInput, userId){
        console.log(gameNameInput, userId)
        let gameData = {name: gameNameInput, user_id: userId}
        console.log(gameData) //might have to parse int userId

        let gameAlert = document.getElementById("game-alert-div")

        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(gameData)
        };
        fetch("http://localhost:3000/games", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            if (json.status === 401){
                gameAlert.setAttribute("class", "alert-wrapper")
                gameAlert.innerHTML = `Cannot create game. ${json["main"]}`
            }
            else {
                console.log(json)
                document.getElementById("post-game-form").reset()
                //need to getUsergames again...
                let newGame = new Game(json)
                console.log(newGame)
                //this.fetchGames()
                
                let grabbedHtml = document.querySelectorAll(`[id*="-option"]`)
                newGame.selectionAdapter.getCheckedCharacters(newGame.id, grabbedHtml) //nodelist

                newGame.renderGameDisplay()
                


                // let gameUser = newGame.getUser()
                // gameUser.getUserGames()

               

            }

        });

    } // end of postGame

}