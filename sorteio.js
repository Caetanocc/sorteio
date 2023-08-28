const alunos = 
[
'ALEX DOS SANTOS MENDES          ',
'ANTONIO LUCAS VIEIRA OLIVEIRA   ',
'CAIO MARINS                     ',
'CARLEANDRO GOMES SILVA          ',
'CARLOS DANIEL DA SILVA RODRIGUES',
'DANIEL YUJI SENARA              ',
'DENISE FELIX DE ALMEIDA         ',
'ERICK MASSAHIRO KONNO           ',
'FABIANA BONIFACIO DOS SANTOS    ',
'FELIPE MOMESSO DE BARROS LOPES  ',
'FELIPE PESSOA MANICARDI         ',
'FERNANDO FERREIRA BONIFACIO     ',
'GUILHERME PENA SALES            ',
'JOAO PAULO CANO CARLOS          ',
'JUAN JOSE MANCILLA CALLEJAS     ',
'LEONARDO OLIVEIRA GOMES DA SILVA',
'LUCAS MAZZA E COSTA             ',
'MATHEUS LEITE DE SOUZA          ',
'RAPHAEL DA SILVA LIMA           ',
'RODRIGO DE MORAES LAGROTTERIA   ',
'SANDY WARA MAMANI CONDORI       ',
'THALIB NUREDIN ZUBAIDAH DE PAULA'

]

let text = '<table id="t01"> ';

alunos.forEach( (element, index) => {
    text += "<tr><td>" + index + "</td>";
    text += "<td>" + element + "</td>";
    text += '<td> </td>'
    text += "</tr>";
});

text += "</table>";
document.getElementById("lista").innerHTML = text;

let qtdeAlunos = alunos.length;

let btn = document.querySelector("#btnSortear")
btn.addEventListener('click', sortear)

let sorteados = [];
function numero_aleatorio() {
    let aleatorio = Math.floor(Math.random() * qtdeAlunos);

    if (sorteados.indexOf(aleatorio) == -1)
        sorteados.push(aleatorio);

    return aleatorio
}


function sortear() {
    let sorteado = numero_aleatorio();

    text = '<table id="t02"> ';

    sorteados.forEach( element  => {
        text += "<tr><td>" + element + "</td>";
        text += "<td>" + alunos[element] + "</td>";
        text += '<td> </td>'
        text += "</tr>";
    });
    
    text += "</table>";
    document.getElementById("sorteados").innerHTML = text;

    mostrarSorteado(sorteado)

}

function mostrarSorteado(sorteado) {
    let x = document.getElementById("snackbar");
    x.innerHTML = sorteado
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}    



