class Games {
    constructor(userId, userGamesArray){
        this.user_games = userGamesArray
        this.user_id = userId
        this.games = [] //do i need this if i already got games from User Json?
    }


    getUserGames(){
        //fetch("http://localhost:3000/users/" + `${this.id}` + "/games")
        //.then(response => response.json())
        //.then(games => {
        this.games.forEach(game =>{
                
                let userGames = document.getElementById("user-games")
                let gameheader = `${game.name}`
                userGames.append(gameheader)

                let userGamesSelect = document.getElementById("list-user-games")
                userGamesSelect.innerHTML += `
                    <option value="${game.id}">${game.name}</option>
                `

                this.games.push(new Game(game)) //do i need this
             
        })
        console.log(this) //user
        const showGameButton = document.getElementById("game-select-btn")
        showGameButton.addEventListener('click', renderSelectedGame(e))
    }




} //end of class Games



class Game {

    constructor(gameJson){
        this.id = gameJson["game"]["id"]
        this.user_id = gameJson["game"]["user_id"]
        //this.user = gameJson["game"]["user"]
        this.name = gameJson["game"]["name"]
        this.charaters = []
    }

    // if using bottom, how would i post a new game 
    // and then construct a new instance if json is in different format

    constructor(gameInfoFromUserJson){
        // {id: 1, name: "seedgame", user_id: 1, created_at: "2020-06-02T19:03:30.138Z", updated_at: "2020-06-02T19:03:30.138Z"}
        this.id = gameInfoFromUserJson.id
        this.user_id = gameInfoFromUserJson.user_id
        this.name = gameInfoFromUserJson.name
        this.characters = []

    }


}