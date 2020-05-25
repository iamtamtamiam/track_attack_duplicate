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
            console.log("logging out....did it work?") //testing input
            
            //let signupData = {username: inputUsername, password: inputPassword}
            //console.log(signupData)
        
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

                //var alertButton = document.getElementById("alert-div");
                //if (json.status === 401) {
                //  alertButton.setAttribute("class", "alert-wrapper")
                //  alertButton.innerText = `Login Failed. Please try again. ${json["main"]["username"][0]}`
                //}
                //else {
                //    const signedUpUser = new User(json)
                //    signedUpUser.renderUserWelcomeMessage()
            //
                //}
                
            
            });
        




        })
        
    }


   logoutUser(){
            console.log("logging out....did it work?") //testing input
            
            //let signupData = {username: inputUsername, password: inputPassword}
            //console.log(signupData)
        
            let configObj = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify(signupData)
            };
            fetch("http://localhost:3000/logout", configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);

                //need to clear the page...change the dashboard
                //return login form? 

                
            
            });
        
        } //end of logout



}