//const endPoint = "http://localhost:3000/users/characters";

document.addEventListener('DOMContentLoaded', () => {
    alert('LOADED');
    getUsers()
  });


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