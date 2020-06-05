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
                <input class="counter-btn-heal" id="heal-btn-${character.id}" type="button" value="Heal(+1)">
                <input class="counter-btn-attack" id="attack-btn-${character.id}" type="button" value="Attacked(-1)">
                <img id="${character.id}" name="${character.description}" src="${character.image}" height="500" width="250"></img>
                </div>
                `
            document.getElementById("found-character-images").innerHTML += characterHtml

            let CreateGameForm = document.getElementById("create-game-form")
            CreateGameForm.reset()

            //this.getUserGames()
                
        })

        
        let characterHealButtons = document.querySelectorAll(".counter-btn-heal")
        console.log(characterHealButtons)
        characterHealButtons.forEach(button => {
            let buttonId = button.id.slice(-1) //string id number
            button.addEventListener('click', (e) => {
                e.preventDefault()
                let characterPoints = parseInt(document.getElementById("counter-" + `${buttonId}`).innerHTML)
                let newPoints = characterPoints += 1
                document.getElementById("counter-" + `${buttonId}`).innerHTML = newPoints
            })
        })

        let characterAttackButtons = document.querySelectorAll(".counter-btn-attack")
        console.log(characterAttackButtons)
        characterAttackButtons.forEach(button => {
            let buttonIdA = button.id.slice(-1) //string id number
            button.addEventListener('click', (e) => {
                e.preventDefault()
                let characterPointsA = parseInt(document.getElementById("counter-" + `${buttonIdA}`).innerHTML)
                let newPointsA = characterPointsA -= 1
                document.getElementById("counter-" + `${buttonIdA}`).innerHTML = newPointsA
            })
        })


    } //end of rendergamedisplay


    


 // getSelectedCharacters(){
 //     const characterSubmitButton = document.getElementById("character-select-btn")
 //     characterSubmitButton.addEventListener('click', (e) => {
 //         e.preventDefault()
 //         let grabbedHtml = document.querySelectorAll(`[id*="-option"]`)
 //         grabbedHtml.forEach(option => {
 //             if (option.checked === true){
 //                 console.log(option)
 //             }
 //             else {
 //                 alert("did not check")
 //             }
// 
 //         })
 //     })
// 
 //    }



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