class SelectionAdapter {

    getCheckedCharacters(gameId, optionsNodeList){
        optionsNodeList.forEach(option => {
            if (option.checked === true){
                console.log(option)
                alert(`"${option.name}"`)
                console.log("this is the game id")
                console.log(gameId)
                
                //pull a game id
                //get the id from options checked
                
                //to create a new Selection
                //will post in Game.postgame
                
                // let newSelection = new Selection(gameId, characterId)
            }





        })
    }

}