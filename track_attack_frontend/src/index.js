//const endPoint = "http://localhost:3000/users/characters";

document.addEventListener('DOMContentLoaded', () => {
    alert('LOADED');
    getUsers()

    let loginForm = document.querySelector("#login-form")
    loginForm.addEventListener('submit', (e) => createFormHandler(e))
  });


function createFormHandler(e) {
    e.preventDefault()
    const usernameInput = document.querySelector("#login-name").value
    const passwordInput = document.querySelector("#login-password").value
    postUser(usernameInput, passwordInput)
}

function postUser(username, password){
    console.log(username, password) //testing input
    
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