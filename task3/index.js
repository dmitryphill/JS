
//timeout
const password = document.getElementById("password");
const pwlab = document.getElementById("passlbl");
const submit = document.getElementById("submit");
function checkPassword (){
    const pmin = 6;
    const pmax = 32;

    if (!/[a-zA-Z]/.test(password.value)){
        pwlab.innerHTML = "Password incorrect";  
        submit.setAttribute("disabled", "disabled");
    } 
    if (!/[0-9]/.test(password.value)){
        pwlab.innerHTML = "Password incorrect";  
        submit.setAttribute("disabled", "disabled");
    }
    else if (password.value.length < pmin || password.value.length > pmax) {
        pwlab.innerHTML = "Password incorrect";  
        submit.setAttribute("disabled", "disabled");
    };
    password.onfocus =  function clear (){
        password.value = "";
        pwlab.innerHTML = "";
        submit.removeAttribute("disabled");
    };
   
};

password.onchange = function (){
    setTimeout(checkPassword, 500);
};
const logInForm = document.getElementById("logInForm");
logInForm.onsubmit = function writeData (event){
    event.preventDefault();
    console.log(password.value);
};


//promise
const password2 = document.getElementById("password2");
const pwlab2 = document.getElementById("passlbl2");
const submit2 = document.getElementById("submit2");


password2.addEventListener("change", async () => {
    const pmin = 6;
    const pmax = 32;
    let erro = "";
    if (!/[a-zA-Z]/.test(password2.value)){
        erro = "Password incorrect";  
        submit2.setAttribute("disabled", "disabled");
    } 
    if (!/[0-9]/.test(password2.value)){
        erro = "Password incorrect";  
        submit2.setAttribute("disabled", "disabled");
    }
    else if (password2.value.length < pmin || password2.value.length > pmax) {
        erro = "Password incorrect";  
        submit2.setAttribute("disabled", "disabled");
    };
    password2.onfocus =  function clear (){
        password2.value = "";
        pwlab2.innerHTML = "";
        submit2.removeAttribute("disabled");
    };
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(erro), 500)
    });
    
   const err = await promise;
   pwlab2.innerHTML = err;
})

const logInForm2 = document.getElementById("logInForm2");
logInForm2.onsubmit = function writeData (event){
    event.preventDefault();
    console.log(password2.value);
};


//генерація і провірка 10 паролів
const genPass = document.getElementById("gp");

function generatePassword() {
    let length = 10;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let password = ""
        for (let i = 0, n = charset.length; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n))};
    
    return password;
    
};

function validePass(pass){
    let mess = "";
    if (!/[a-zA-Z0-9]/.test(pass.value)){
        mess += "Password incorrect";    
    } 
    else {
        mess += "Correct";
    }
    return mess;
}

gp.onclick = function tenPa() {
let passes = [];
const count = 10;
let promise = [];
console.time("Promise.all");
for (let i = 0; i < count; i++){
    passes[i]=generatePassword();
    promise[i]= new Promise((resolve, reject) => {
        setTimeout(resolve(validePass(passes[i])), 500);
    });    
};
console.log(passes);
Promise.all(promise).then(message =>{
    console.log(message);
    console.timeEnd('Promise.all');})
}

const genPass2 = document.getElementById("gp2");
gp2.addEventListener('click', async () =>  {
    let passes = [];
    const count = 10;
    let promise = [];
    console.time("Async");
    for (let i = 0; i < count; ++i){
        passes[i]=generatePassword();
        promise[i]= new Promise((resolve, reject) => {
            setTimeout(resolve(validePass(passes[i])), 500);
        });    
    };
    console.log(passes);
    try{
        const resultarr = [];
        for (let i = 0; i<passes.length; i++){
            resultarr[i]= await promise[i];
        }
        console.log(resultarr)
    } catch (e){
        console.log(e);
    }
    console.timeEnd("Async");
    })