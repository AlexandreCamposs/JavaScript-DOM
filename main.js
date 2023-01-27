const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');
const controle = document.querySelectorAll(".controle-ajuste")
console.log(controle)

somar.addEventListener('click', () => {manipulandoDados("somar")})
subtrair.addEventListener('click', () =>{manipulandoDados("subtrair")})

//Refatorando o código acima.
function manipulandoDados(operacao){
  if(operacao === "subtrair"){
    braco.value = parseInt(braco.value) -1
  }else{
    braco.value = parseInt(braco.value) +1
  }
}
