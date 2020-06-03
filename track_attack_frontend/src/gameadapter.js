class GameAdapter {
    //use userjson to create new GamesAdapeter
    
    //fetch individual game localhost/games
    

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


}