let amigos = [];
let campo = document.querySelector('input');
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');



function adicionarAmigo () {
    let valorDoCampo = document.getElementById('amigo').value;

    
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

function sortearAmigo() {

    if (amigos.length === 0) {
        resultado.innerHTML = 'Nenhum amigo disponível para o sorteio!';
        
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        lista.innerHTML = '';

        resultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
    }

}