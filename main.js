const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

//Primeiro jeito de fazer. Adicionando evento ao clique e passando o evendo a função anônima.

// somar.addEventListener('click', (evento) => {
//   braco.value = parseInt(braco.value) +1;
// })

// subtrair.addEventListener('click', (evento) =>{
//   braco.value = parseInt(braco.value) -1;
// })

//Refatorando o código acima.
function manipulandoDados(operacao){
  if(operacao === "subtrair"){
    braco.value = parseInt(braco.value) -1
  }else{
    braco.value = parseInt(braco.value) +1
  }
}