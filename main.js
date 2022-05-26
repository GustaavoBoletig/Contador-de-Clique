let contador = 0;
//A Div com o Número Zero aonde que vai contar os cliques
let res = document.getElementById('saida');

//Tags Buttons do + e -
let adicionar = document.getElementById('add');
let remover = document.getElementById('remove');

//Buttons com Manipuladora de Eventos
adicionar.addEventListener('click' , aumentar);
remover.addEventListener('click' , diminuir);

//Funções ao usuario clicar no + e -
function aumentar(){
contador++;
res.innerHTML = contador;
}
function diminuir(){
contador--;
res.innerHTML = contador;
}