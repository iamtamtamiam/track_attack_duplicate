class User {

    constructor(userJson){
        this.id = userJson["user"]["id"]
        this.username = userJson["user"]["username"] 
    } //call new user when logging in/signup 


    //rendering

    renderUserWelcomeMessage(){
        //hides the failure alert
        //hitdes the login form
        //displays welcome
        console.log(this)
        var alertButton = document.getElementById("alert-div");
            //if logged in, hide the failure alert
            //need to add welcome user and hide signup/login form
            alertButton.setAttribute("class", "hidden")
            alertButton.innerText = "" 
            document.getElementById("login-form").style.display="none"
            let weclcomeMessage = document.getElementById("welcome-user")
            //weclcomeMessage.innerText = `Welcome ${json["user"]["username"]}!`
            weclcomeMessage.innerText = `Welcome ${this.username}!`

    }



}