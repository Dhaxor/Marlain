var btn = document.querySelector('#btn');
var fullnameDisp = document.querySelector('#fullname');
var usernameDisp = document.querySelector('#username');
var avatar = document.querySelector('#avatar');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
var card = document.querySelector('.card');


var apiUrl = "https://randomuser.me/api/";

btn.addEventListener('click', getUser)

function getUser() {
    fetch(apiUrl)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayErrors)
}

function handleErrors(res) {
    if(!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`)
    }
    return res;
}

function parseJSON(res) {
    return res.json().then(function(data) {
        return data.results[0];
    })
}

function updateProfile(data) {
    var fullname = data.name.first + " " + data.name.last;
    fullnameDisp.innerText = fullname;
    var username = data.login.username;
    usernameDisp.innerText = username;
    avatar.src = data.picture.medium;
    email.innerText = data.email
    city.innerText = data.location.city
}

function displayErrors(err) {
    console.log(err)
}

card.onload = getUser()