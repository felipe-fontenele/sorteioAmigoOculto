let amigos = [];
let campo = document.querySelector('input');
let lista = document.getElementById('listaAmigos');


function adicionarAmigo () {
    // pega o valor do input com id = "amigo"
    valorDoCampo = document.getElementById('amigo').value;

    if (valorDoCampo == '') {
        alert('Por favor,insira um nome.');
    } else {
        amigos.push(valorDoCampo);
        adicionarLi();
        campo.value = '';
    }
}


function adicionarLi(){
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++ ) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }


}