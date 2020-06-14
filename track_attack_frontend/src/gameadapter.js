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
        //console.log("this is the game optionid in adapter")
        //console.log(gameOptionId)

        // fetch("http://localhost:3000/games/" + `${gameOptionId}`)
        // .then(response => response.json())
        configAdapter.get(`/games/`+ `${gameOptionId}`)

        .then(gameJson => {
            console.log(gameJson)
            let gameToRender = new Game(gameJson)
            gameToRender.renderGameDisplay()

            //how do do i get acces to user.js again and renderUserGames?

            //need to fix json of the game class constructor
        })

    }



    postGame(gameNameInput, userId){
        //console.log(gameNameInput, userId)
        let gameData = {name: gameNameInput, user_id: userId}
        console.log(gameData) //might have to parse int userId

        let gameAlert = document.getElementById("game-alert-div")

        // let configObj = {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "Accept": "application/json"
        //     },
        //     body: JSON.stringify(gameData)
        // };
        
        configAdapter.post(`/games`, configAdapter.setPostObj(gameData))
        // fetch("http://localhost:3000/games", configObj)
        // .then(function(response) {
        //     return response.json();
        // })
        .then(function(json) {
            //console.log(json);
            if (json.status === 401){
                gameAlert.setAttribute("class", "alert-wrapper")
                gameAlert.innerHTML = `Cannot create game. ${json["main"]}`
            }
            else {
                console.log(json)
                //document.getElementById("post-game-form").reset()
                //need to getUsergames again...
                let newGame = new Game(json)
                console.log(newGame)
                //this.fetchGames()
                
                let grabbedHtml = document.querySelectorAll(`[id*="-option"]`)
                newGame.selectionAdapter.getCheckedCharacters(newGame.id, grabbedHtml) //nodelist
                // console.log(newGame)
                // newGame.renderGameDisplay()
                // 
                // GameAdapter.getIdForRender.call(newGame.id)

                // let gameUser = newGame.getUser()
                // gameUser.getUserGames()

                //let gameIdForSearch = newGame.id
                //console.log(gameIdForSearch)
                //return gameIdForSearch
                console.log(User.current)
                
               

                User.current.games.push(newGame)
                //newGame["Game"]
                console.log(User.current.games)
                User.current.getUserGames()
                
                
                
                
                //need to refresh the bar before getting bar
                
            }

        });

        //this.getIdForRender(gameIdForSearch)
    } // end of postGame


   //  getIdForDelete(gameOptionId){
   //      console.log(gameOptionId)
   //      let gameDataForDelete = {game_id: gameOptionId}
   //      let configObj = {
   //          method: "DELETE",
   //          headers: {
   //            "Content-Type": "application/json",
   //            "Accept": "application/json"
   //          },
   //          body: JSON.stringify(gameDataForDelete)
   //      }; 
   //      fetch("http://localhost:3000/games/" + `${gameOptionId}`, configObj)
   //      .then(function(response) {
   //          return response.json();
   //      })
   //      .then(function(json) {
   //          console.log(json);})
   //  }
    

}