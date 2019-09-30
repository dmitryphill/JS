let header = document.createElement('div');
header.className = "header"
let greetings = document.createElement('div');
greetings.innerHTML = "Привіт";
greetings.id="greetings";
let context = document.createElement('div');
context.innerHTML = "Базовий приклад SPA без використання сторонніх бібліотек.";
let linkOne = document.createElement('a');
linkOne.href = "#greetings";
linkOne.innerHTML = "Перейти на привітання";
let linkTwo = document.createElement('a');
linkTwo.href = "#";
linkTwo.innerHTML = "Перейти назад";

function appendElements (){
    header.appendChild(greetings);
    header.appendChild(context);
    header.appendChild(linkOne);
    header.appendChild(linkTwo);
    document.body.prepend(header);
};
appendElements();

const email = document.getElementById("email");
email.onchange = function checkEmail (){ 
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!reg.test(email.value))
    {
        alert("U`r email incorrect, try again");
        email.value = "";
    };
};

const password = document.getElementById("password");
password.onchange = function checkPassword (){
    if (!/[a-zA-Z]/.test(password.value)) {
        alert("U`r pass must to contain at least one english letter");
        password.value = "";
    };
    if (!/[0-9]/.test(password.value)){
        alert("U`r pass must to contain at least one digit");
        password.value = "";
    }
    if (password.value.length < 7){
        alert("U`r pass to short, try again with 8+ symbols");
        password.value = "";
    }
    else if (password.value.length > 30){
        alert("U`r pass to long, try again with less than 30 symbols");
        password.value = "";
    }
   
};

const logInForm = document.getElementById("logInForm");
logInForm.onsubmit = function writeData (event){
    event.preventDefault();
    console.log(email.value +" "+ password.value);
    
};