
const $button = document.querySelector("#enviar");
const $input =  document.querySelector("#temperatura");
const $saida = document.querySelector("#vlrConvertido");
const $saida2 = document.querySelector("#vlrConvertido2")
function handlerClick(event){
  event.preventDefault();

  let temp = parseFloat($input.value);

  let fahrenheit = (((temp * 9) / 5) + 32).toFixed(2);
  let kelvin = (temp + 273.15).toFixed(2);

  if(temp >=0 || temp < 0){
    $saida.innerHTML = "Fahrenheit: " + fahrenheit + "F";
    $saida2.innerHTML = "Kelvin: " + kelvin + "k";
  }
  else{
    $saida.innerHTML = "Valor do input está vazio, " 
    $saida2.innerHTML = "informe um valor para fazermos a conversão!" 
  }  
}


$button.addEventListener("click", handlerClick);
