//buttton listeners, route, fetch, post 
//render failure? if else

class Authenticate {

    login(){
        const loginButton = document.getElementById("login-btn")
        //loginButton.addEventListener('click', (e) => loginFormHandler(e))

        ///function loginFormHandler(e) {
        
        loginButton.addEventListener('click', (e) => {
            e.preventDefault()
            const usernameInput = document.querySelector("#login-name").value
            const passwordInput = document.querySelector("#login-password").value
            postUser(usernameInput, passwordInput)
        })
    


        function postUser(inputUsername, inputPassword){
            console.log(inputUsername, inputPassword) //testing input
            let loginData = {username: inputUsername, password: inputPassword}
            console.log(loginData)
        
            let configObj = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify(loginData)
            };
            fetch("http://localhost:3000/login", configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                   //  localStorage.setItem("user", JSON.stringify(response.data)); 
                var alertButton = document.getElementById("alert-div");
                if (json.status === 401) {
                  alertButton.setAttribute("class", "alert-wrapper")
                  alertButton.innerText = `Login Failed. Please try again.`
                }
                else {
        
                    let loggedInUser = new User(json)
                    console.log(loggedInUser)
                    User.current = loggedInUser
                    console.log(User.current)
                    loggedInUser.renderUserWelcomeMessage()
                }
                //login and then refresh the page so that the login faild doesnt show     
            });
        
        }
    }


    signup(){

        const signupButton = document.getElementById("signup-btn")
        
        signupButton.addEventListener('click', (e) => {    
            e.preventDefault()
            const usernameInput = document.querySelector("#login-name").value
            const passwordInput = document.querySelector("#login-password").value
            signupUser(usernameInput, passwordInput)
        })

        function signupUser(inputUsername, inputPassword){
            console.log(inputUsername, inputPassword) //testing input
            let signupData = {username: inputUsername, password: inputPassword}
            console.log(signupData)
        
            let configObj = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify(signupData)
            };
            fetch("http://localhost:3000/users", configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                var alertButton = document.getElementById("alert-div");
                if (json.status === 401) {
                  alertButton.setAttribute("class", "alert-wrapper")
                  alertButton.innerText = `Login Failed. Please try again. ${json["main"]["username"][0]}`
                }
                else {
                    const signedUpUser = new User(json)
                    User.current = signedUpUser
                    signedUpUser.renderUserWelcomeMessage()
            
                }
            
            });
        
        }
    } //end of signup


    






} //end of class
