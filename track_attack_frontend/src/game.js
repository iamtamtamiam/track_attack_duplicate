class Game {
    constructor(gameJson){
        this.id = gameJson["game"]["id"]
        this.user_id = gameJson["game"]["user_id"]
        //this.user = gameJson["game"]["user"]
        this.name = gameJson["game"]["name"]
    }

    
    renderGameDisplay(){
        //need hide/reset the create new game
        let gameTitle = document.getElementById("game-title")
        gameTitle.innerText = `Game: ${this.name}`
        this.gameCharacterOptions()

    } //end of rendergamedisplay


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
                newGame.renderGameDisplay()
                


                // let gameUser = newGame.getUser()
                // gameUser.getUserGames()

               

            }

        });

    } // end of postGame


    gameCharacterOptions(){
        //options =[]
        //fetch all characters and put it in a select form (checkbox)?
        //render selected options in renderGameDisplay()
        fetch("http://localhost:3000/characters")
        .then(res => res.json())
        .then(function(json){
            json.forEach(character => {
                let characterOption = `
                    <label>
                        <input type="checkbox" id="${character.id}" name="${character.id}">
                        ${character.description}
                    </label>
                `

                document.getElementById("check-character-options").innerHTML += characterOption

            })
            
            
        })



    } //end of gameCharacterOptions()



   //*  createNewGame(userId){
   //*      const gameButton = document.getElementById("game-btn")
//* 
   //*      gameButton.addEventListener('click', (e) => {
   //*          e.preventDefault()
   //*          const gameNameInput = document.getElementById("game-name").value
   //*          
   //*          postGame(gameNameInput, userId)
   //*      })
//* 
   //*      function postGame(gameNameInput, userId){
   //*          console.log(gameNameInput, userId)
   //*          let gameData = {name: gameNameInput, user_id: userId}
   //*          console.log(gameData) //might have to parse int userId
//* 
   //*          let gameAlert = document.getElementById("game-alert-div")
//* 
   //*          let configObj = {
   //*              method: "POST",
   //*              headers: {
   //*                "Content-Type": "application/json",
   //*                "Accept": "application/json"
   //*              },
   //*              body: JSON.stringify(gameData)
   //*          };
   //*          fetch("http://localhost:3000/games", configObj)
   //*          .then(function(response) {
   //*              return response.json();
   //*          })
   //*          .then(function(json) {
   //*              console.log(json);
   //*              if (json.status === 401){
   //*                  gameAlert.setAttribute("class", "alert-wrapper")
   //*                  gameAlert.innerHTML = `Cannot create game. ${json["main"]}`
   //*              }
   //*              else {
   //*                  console.log(json)
   //*              }
//* 
   //*          });
//* 
   //*      } //end of postGame
   
        
  //*   } //end of createGame


    // getUser(){
    // return User.all.find(user => user.id === this.user_id)
    // }



}