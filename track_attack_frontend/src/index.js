//const endPoint = "http://localhost:3000/users/characters";

document.addEventListener('DOMContentLoaded', () => {
    alert('LOADED');
    getUsers()

    //let loginForm = document.querySelector("#login-form")
    //loginForm.addEventListener('submit', (e) => createFormHandler(e))

    const loginButton = document.getElementById("login-btn")
    loginButton.addEventListener('click', (e) => loginFormHandler(e))

    const signupButton = document.getElementById("signup-btn")
    signupButton.addEventListener('click', (e) => signupFormHandler(e))
  });




function loginFormHandler(e) {
    e.preventDefault()
    const usernameInput = document.querySelector("#login-name").value
    const passwordInput = document.querySelector("#login-password").value
    postUser(usernameInput, passwordInput)
}

function signupFormHandler(e) {
    e.preventDefault()
    const usernameInput = document.querySelector("#login-name").value
    const passwordInput = document.querySelector("#login-password").value
    signupUser(usernameInput, passwordInput)
}

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
            console.log(json)
            //if logged in, hide the failure alert
            //need to add welcome user and hide signup/login form
            alertButton.setAttribute("class", "hidden")
            alertButton.innerText = "" 
        }
        //login and then refresh the page so that the login faild doesnt show     
    });

}


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
            
        // var alertButton = document.getElementById("alert-div");
        // if (json.status === 401) {
        //   alertButton.setAttribute("class", "alert-wrapper")
        //   alertButton.innerText = `Login Failed. Please try again.`
        // }
        // else {
        //     console.log(json)
        //     alertButton.setAttribute("class", "hidden")
        //     alertButton.innerText = "" 
        // }
            
    });

}






//testing rendering on html
function getUsers(){
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    //.then(json =>console.log(json))
    .then(users => {
        users.forEach(user => {
            let experimentingUsers = `
                <p>${user.id}</p>
                <p>${user.username}</p>
            `
        //document.querySelector(".experimenting").innerHTML += experimentingUsers
        document.querySelector(".experimenting").append(experimentingUsers)
            
        });
    })
}



//testing  
console.log("testing...in index.js")


//testing rails and js connection with fetch ; added http://
const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/users/1`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));