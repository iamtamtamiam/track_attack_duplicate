class Game {

    createNewGame(){
        const gameButton = document.getElementById("game-btn")

        gameButton.addEventListener('click', (e) => {
            e.preventDefault()
            const gameNameInput = document.getElementById("game-name").value
            
            postGame(gameNameInput)
        })

        function postGame(gameNameInput){
            console.log(gameNameInput)
        }
    }

}