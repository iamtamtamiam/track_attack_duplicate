class User {

    constructor(userJson){
        //this.id = userJson["user"]["id"]
        this.id = userJson.data.id
        this.username = userJson.data.attributes.username
        this.games = userJson.data.attributes.games //[]
    } //call new user when logging in/signup 



    renderUserWelcomeMessage(){
        console.log(this)
        var alertButton = document.getElementById("alert-div");
            alertButton.setAttribute("class", "hidden")
            alertButton.innerText = "" 
        document.getElementById("login-form").style.display="none"
        let weclcomeMessage = document.getElementById("welcome-user")
            //weclcomeMessage.innerText = `Welcome ${json["user"]["username"]}!`
            weclcomeMessage.innerText = `Welcome ${this.username}!`
        let logoutButton = document.createElement("button")
        logoutButton.setAttribute("id", "logout-btn")
        logoutButton.setAttribute("type", "button")
        logoutButton.innerText = `Logout!`
        weclcomeMessage.appendChild(logoutButton)
        
        logoutButton.addEventListener('click', (e) => {    
            e.preventDefault()
            this.logoutUser()
        })

        this.getUserGames()

        //* const newGame = new Game()
        //* newGame.createNewGame(this.id)

        //show/hide game form
        const gameButton = document.getElementById("game-btn")
        gameButton.addEventListener('click', (e) => {
            e.preventDefault()
            const gameNameInput = document.getElementById("game-name").value
            Game.prototype.postGame(gameNameInput, this.id)
            //document.getElementById("user-games-form").reset()
            let userGamesSelect = document.getElementById("list-user-games")
                userGamesSelect.innerHTML = ""
            this.getUserGames() //doesn't have newly Added Game!!!
            //do i need to append new option when creating game instead of fetching again?
        })

        
        
    }


   logoutUser(){
            console.log("logging out....did it work?") //testing input
            let weclcomeMessage = document.getElementById("welcome-user")
            let logoutButton = document.getElementById("logout-btn")
            let configObj = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify()
            };
            fetch("http://localhost:3000/logout", configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                weclcomeMessage.innerText = `You have been logged out.`
                logoutButton.remove()
                document.getElementById("login-form").reset()
                document.getElementById("login-form").style.display="block"

                //need to clear the page...change the dashboard
                //return login form? 
            
            });
        
        } //end of logout



    getUserGames(){
        //fetch("http://localhost:3000/users/" + `${this.id}` + "/games")
        //.then(response => response.json())
        //.then(games => {
        this.games.forEach(game =>{
                //let newGame = new Game()
                let userGames = document.getElementById("user-games")
                let gameheader = `${game.name}`
                userGames.append(gameheader)

                let userGamesSelect = document.getElementById("list-user-games")
                userGamesSelect.innerHTML += `
                    <option value="${game.id}">${game.name}</option>
                `
                //add event listener to render or show game and also change gamedisplay()
    
            // })
        })
        console.log(this) //user
        const showGameButton = document.getElementById("game-select-btn")
        showGameButton.addEventListener('click', renderSelectedGame(e))
    }

    renderSelectedGame(){
        document.querySelectorAll("#list-user-games > option").forEach(option => {console.log(option.innerHTML)})
        const selectionValues = document.querySelectorAll("#list-user-games > option")
        selectionValues.forEach(option => {
            console.log(option.innerHTML)
            if (option.selected === true){
                console.log(option)
            }
        })

    }
    

}

