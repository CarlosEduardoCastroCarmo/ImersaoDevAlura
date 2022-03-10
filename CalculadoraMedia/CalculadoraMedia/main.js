//Quando o usuário apertar o botão ou quando ele apertar o enter pegar o valor que ele
//digitou no input

const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $media = document.querySelector("#media");
const $aprovado = document.querySelector("#aprovado");
const $registros = document.querySelector("#registros")
let total = 0;
let qtdNotas = 0;
let media = 0;
let aprovado = "Não";

function handlerClick(event){
  event.preventDefault();

  const nota = Number($input.value);

  if(nota >= 0 && nota <= 10 && nota !== '')
  {
    total += nota;
    qtdNotas ++;

    media = total / qtdNotas;
  
    if(media >= 7)
    {
    aprovado = "Sim"
    }
    else
    {
    aprovado = "Não"
    }
  $media.textContent = media.toFixed(1);
  $aprovado.textContent = aprovado;

  $registros.insertAdjacentHTML("beforeend",`<li>${nota}</li>`);
  }
}

$button.addEventListener("click", handlerClick);




