const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const paintImg = document.querySelector("#blackImg");
const day = document.querySelector("#day");
const clock = document.querySelector("#clock");
const weather = document.querySelector("#weather")
const todo = document.querySelector("#todo")
const littleblack = document.querySelector("#littleblack")

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting();
}

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Welcome ${username} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    paintImg.classList.add(HIDDEN_CLASSNAME);
    day.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
    littleblack.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreeting();
}
