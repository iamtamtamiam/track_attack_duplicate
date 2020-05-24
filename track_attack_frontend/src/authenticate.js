//buttton listeners, route, fetch, post 
//render failure? if else
class Authenticate {

    login(){
        const loginButton = document.getElementById("login-btn")
        //loginButton.addEventListener('click', (e) => loginFormHandler(e))

        //function loginFormHandler(e) {
        
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
                    //new user
                    const loggedInUser = new User(json)
                    loggedInUser.renderUserWelcomeMessage()
                }
                //login and then refresh the page so that the login faild doesnt show     
            });
        
        }





    }

}