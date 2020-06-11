class User {

    

    constructor(userJson){
        //this.id = userJson["user"]["id"]
        this.id = userJson.data.id
        this.username = userJson.data.attributes.username
        this.games = userJson.data.attributes.games //[]
        //* this.games = new Games(this.id, userJson.data.attributes.games)
        this.gameAdapter = new GameAdapter
        this.charactersAdapter = new CharactersAdapter
        // this.selectionAdapter = new SelectionAdapter
    } //call new user when logging in/signup 



    renderUserWelcomeMessage(){
        console.log(this)
        var alertButton = document.getElementById("alert-div");
            alertButton.setAttribute("class", "hidden")
            alertButton.innerText = "" 
        document.getElementById("login-form").style.display="none"
        document.getElementById("logged-in-display").style.display = "block"
        let weclcomeMessage = document.getElementById("welcome-user")
            //weclcomeMessage.innerText = `Welcome ${json["user"]["username"]}!`
            weclcomeMessage.innerHTML = `Welcome ${this.username}!     `
        let logoutButton = document.createElement("button")
        logoutButton.setAttribute("id", "logout-btn")
        logoutButton.setAttribute("type", "button")
        logoutButton.innerText = `Logout!`
        weclcomeMessage.appendChild(logoutButton)
        
        logoutButton.addEventListener('click', (e) => {    
            e.preventDefault()
            this.logoutUser()
        })

        let gameTitle = document.getElementById("game-title")
        gameTitle.innerText = `Select a game from the select bar, then click show game to display game below.`
        
        document.getElementById("seeded-images").style.display="none"

        this.getUserGames()
        this.renderCreateGameForm()

        
        
    } // end of renderWelcome 


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
                document.getElementById("seeded-images").style.display="block"
                //need to clear the page...change the dashboard
                //return login form? 
                console.log(User.current) // do i need to clear?
                document.getElementById("list-user-games").innerHTML = ""
                document.getElementById("logged-in-display").style.display="none"
                document.getElementById("create-game-characters").innerHTML = ""
                document.getElementById("container-games").innerHTML = ""

               

                //User.current = ""
                

            });
            User.current =""
            console.log(this)
            console.log(User.current)
            location.reload()
        } //end of logout



    getUserGames(){
        //fetch("http://localhost:3000/users/" + `${this.id}` + "/games")
        //.then(response => response.json())
        //.then(games => {

        document.getElementById("list-user-games").innerHTML = ""

        this.games.forEach(game =>{
                //let newGame = new Game()
              
                let userGamesSelect = document.getElementById("list-user-games")
                userGamesSelect.innerHTML += `
                    <option value="${game.id}">${game.name}</option>
                `
                //* game.getIdForRender()
                //add event listener to render or show game and also change gamedisplay()
        })
        console.log(this) //user
        

        const showGameButton = document.getElementById("game-select-btn")
         showGameButton.addEventListener('click', (e) =>{
             e.preventDefault()
             //document.querySelectorAll("#list-user-games > option").forEach(option => {console.log(option.innerHTML)})
             const selectionValues = document.querySelectorAll("#list-user-games > option")
             selectionValues.forEach(option => {
                 //console.log(option.innerHTML)
                 if (option.selected === true){
                     console.log(option)
                     this.gameAdapter.getIdForRender(option.value)

                 }
             })
         })


    } // end of get user games


    renderCreateGameForm(){
        //add character selection options to form
        //fromcharacterAdapter?
        //add event listeners
        //to post the new game
        this.charactersAdapter.getAllCharacters()
        let createGameButton = document.getElementById("create-game-form")
        createGameButton.addEventListener('submit', function(e) {
            e.preventDefault()
            User.current.createUserGame()})
        //let createGameButton = document.getElementById("create-game-form")
        //createGameButton.addEventListener('submit', function(e) {
        //    e.preventDefault()
        //    let newGameName = document.getElementById("create-game-name").value
        //    debugger
        //    User.current.gameAdapter.postGame(newGameName, User.current.id)
        //})
        

        //this.charactersAdapter.getAllCharacters()
        //let createGameButton = document.getElementById("create-game-btn")
        //createGameButton.addEventListener('click', (e)=>{this.createUserGame(e)})
    }
    
    //need to add event listener that calls createUserGame

    createUserGame(){
        
        let newGameName = document.getElementById("create-game-name").value
        this.gameAdapter.postGame(newGameName, this.id)
        
        //this.getUserGames()  
    }

}
