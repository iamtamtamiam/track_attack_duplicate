class SelectionAdapter {

    //constructor(){
    //    this.gameAdapter.bind = new GameAdapter
    //}    

    getCheckedCharacters(gameId, optionsNodeList){
        optionsNodeList.forEach(option => {
            if (option.checked === true){
                console.log(option)
                alert(`"${option.name}"`)
                console.log("this is the game id")
                console.log(gameId)
                console.log(this)
                this.postSelection(gameId, option)
                
                //pull a game id
                //get the id from options checked
                
                //to create a new Selection
                //will post in Game.postgame
                
                // let newSelection = new Selection(gameId, characterId)

               

            }





        })
    } //end of get checked characters


    postSelection(gameId, option){
        //take the option, get the name value
        //then use value to get the character..JK
        let selectionData = {game_id: gameId, character_id: option.name}
        //might need to turn value into integer parseInt()
        console.log(selectionData)

        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(selectionData)
        };
        fetch("http://localhost:3000/selections", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log("this is the selection json back")
            console.log(json)
            let newGameAdapter = new GameAdapter
            newGameAdapter.getIdForRender(json.game_id)
            //return json.game_id
            //this.gameAdapter.getIdForRender(json.game_id)
            //need to render the game
            //use the json to get the game id and render the game?
        })

        

    }

}