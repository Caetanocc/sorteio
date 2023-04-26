let senha= document.querySelector("#senha")
let btn = document.querySelector("#btnEntrar")

function habitarBotao(){
    btn.disabled = false;
}

senha.addEventListener('blur', habitarBotao)