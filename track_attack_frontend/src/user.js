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