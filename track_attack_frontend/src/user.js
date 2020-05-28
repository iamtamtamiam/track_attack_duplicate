class User {

    constructor(userJson){
        this.id = userJson["user"]["id"]
        this.username = userJson["user"]["username"] 
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

        //* const newGame = new Game()
        //* newGame.createNewGame(this.id)

        //show/hide game form
        const gameButton = document.getElementById("game-btn")
        gameButton.addEventListener('click', (e) => {
            e.preventDefault()
            const gameNameInput = document.getElementById("game-name").value
            postGame(gameNameInput, this.id)
        })

        function postGame(gameNameInput, userId){
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
                    let newGame = new Game(json)
                    console.log(newGame)
                    //this.fetchGames()
                    newGame.renderGameDisplay()
                }

            });

        }
        
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



}