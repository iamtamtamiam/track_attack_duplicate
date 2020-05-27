class Game {


    createNewGame(userId){
        const gameButton = document.getElementById("game-btn")

        gameButton.addEventListener('click', (e) => {
            e.preventDefault()
            const gameNameInput = document.getElementById("game-name").value
            
            postGame(gameNameInput, userId)
        })

        function postGame(gameNameInput, userId){
            console.log(gameNameInput, userId)
            let gameData = {name: gameNameInput, user_id: userId}
            console.log(gameData) //might have to parse int userId

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
                   //  localStorage.setItem("user", JSON.stringify(response.data)); 
                // var alertButton = document.getElementById("alert-div");
                // if (json.status === 401) {
                //   alertButton.setAttribute("class", "alert-wrapper")
                //   alertButton.innerText = `Login Failed. Please try again.`
                // }
                // else {
        // 
                //     const loggedInUser = new User(json)
                //     loggedInUser.renderUserWelcomeMessage()
                // }
                //login and then refresh the page so that the login faild doesnt show     
            });







        }

        
        
    }

}