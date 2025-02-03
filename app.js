let amigos = [];
let campo = document.querySelector('input');

function adicionarAmigo () {
    // pega o valor do input com id = "amigo"
    valorDoCampo = document.getElementById('amigo').value;

    if (valorDoCampo == '') {
        alert('Por favor,insira um nome.');
    } else {
        amigos.push(valorDoCampo);
        campo.value = '';
    }
}
