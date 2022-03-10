
//1 - identificar o clique do botao;
//2 - pegar o valor do input;
//3 - retornar o valor do input convertido para a tela do usuário;

//Definindo constante para a moeda dolar para faciliar na manutenabilidade do código;

const dollar = 5;
const euro = 5.53;
const $button = document.querySelector("#converter");
const $input = document.querySelector("#valor");
const $valorConvertidoDolar = document.querySelector("#valorConvertido")
const $valorConvertidoEuro = document.querySelector("#valorConvertido2")

var valorDolar = 0;
var valorEuro = 0;

function Converter(event){
  event.preventDefault();
  
  valorDolar = parseFloat($input.value * dollar).toFixed(2);
  valorEuro = parseFloat($input.value * euro).toFixed(2);

  $valorConvertidoDolar.innerHTML = "Dolar para real: " + valorDolar;
  $valorConvertidoEuro.innerHTML = "Euro para real: " + valorEuro;  
}

$button.addEventListener("click", Converter);






