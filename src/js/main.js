$(document).ready(function () {
  // Aplicando máscaras com jQuery
  $("#telefone").mask("(00) 0 0000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");
});

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");
const addres = document.getElementById("addres");
const cep = document.getElementById("cep");


form.addEventListener("submit", (event) =>{
event.preventDefault();

checkform();

})

username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

telefone.addEventListener("blur", () => {
    checkInputTelefone();
})

cpf.addEventListener("blur", () => {
    checkInputCpf();
})

addres.addEventListener("blur", () => {
    checkInputAddres();
})

cep.addEventListener("blur", () => {
    checkInputCep();
})




//Nome
function checkInputUsername(){
    const usernameValue = username.value
    
    if(usernameValue === ""){
        errorInput(username, "Insira seu nome completo")
    }
    else {
        const formItem = username.parentElement;
        formItem.classList = "input-campo"
    }
}

//Email
function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Insira seu email")
    }
    else {
        const formItem = email.parentElement;
        formItem.className = "input-campo"
    }
}

//Telefone
function checkInputTelefone(){
    const TelefoneValue = telefone.value;

    if(TelefoneValue ===""){
        errorInput(telefone, "Insira seu telefone")
    }
    else if(TelefoneValue.length < 10) {
        errorInput(telefone, "Número inválido")
    }
    else {
        const formItem = telefone.parentElement;
        formItem.className = "input-campo"
    }
}

//CPF
function checkInputCpf(){
    const cpfValue = cpf.value;

    if(cpfValue ===""){
        errorInput(cpf, "Insira seu cpf")
    }
    else if(cpfValue.length < 14) {
        errorInput(cpf, "CPF inválido")
    }
    else {
        const formItem = cpf.parentElement;
        formItem.className = "input-campo"
    }
}

//Endereço
function checkInputAddres(){
    const addresValue = addres.value;

    if(addresValue ===""){
        errorInput(addres, "Insira seu endereço")
    }
    
    else {
        const formItem = addres.parentElement;
        formItem.className = "input-campo"
    }
}

//CEP
function checkInputCep(){
    const cepValue = cep.value;

    if(cepValue ===""){
        errorInput(cep, "Insira seu CEP")
    }
    else if(cepValue.length < 9) {
        errorInput(cep, "CEP inválido")
    }
    else {
        const formItem = cep.parentElement;
        formItem.className = "input-campo"
    }
}

//Confirmação do cadastro
function checkform() {
    checkInputUsername();
    checkInputEmail();
    checkInputTelefone();
    checkInputCpf();
    checkInputCep();
    checkInputAddres();

    const formItems = form.querySelectorAll(".input-campo")

    const isValid = [...formItems].every( (item) => {
        return item.className === "input-campo"
});
    if(isValid){
        alert("Cadastrado com sucesso!")
    }
    
}



function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "input-campo error"
}

