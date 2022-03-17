//Indetificando atribuindo o momento do clique do usuário a uma variável;
const $button = document.querySelector("#enviar");
const $input = document.querySelector("#takevalue");
const $resultado = document.querySelector("#resultado");
const $tentativas = document.querySelector("#quantidadeTentativas");

var totalTentativas = 3;
var numeroRandomico = parseInt(Math.random()*11);

function Mentalista(event){

    event.preventDefault();

    qtdTentativas = totalTentativas - 1;

    var valorIput = parseInt($input.value);
    if(valorIput > 10){
        $resultado.innerHTML = "Tentativa inválida, número informado é maior que 10!";
    }
    else if(numeroRandomico != valorIput && valorIput < numeroRandomico){
        $resultado.innerHTML = "Voce errou, o número informado é menor que nosso numero secreto";
    }
    else if(numeroRandomico != valorIput && valorIput > numeroRandomico){
        $resultado.innerHTML = "Voce errou, o número informado é maior que nosso numero secreto";
    }
    else if(valorIput == numeroRandomico){
        $resultado.innerHTML = "Uooow, parece que temos um vencedor. Parabéns, você acertou!!";

        $button.disabled = true;  
        setTimeout(function(){
            location.reload(1)
        }, 3000 );
   }
    else{
        $resultado.innerHTML = "Campo Input está vazio!";
    }    
}

function ContarTentativas(event){
    event.preventDefault();

    if(totalTentativas < 0)
    {
        $tentativas.innerHTML = "Você perdeu, suas tentativas foram esgotadas!";
        $tentativas.innerHTML = "Você perdeu. O número secreto era: " + numeroRandomico + ", recarregando desafio";  
        $resultado.innerHTML = ' ';
        $button.disabled = true;  
        setTimeout(function(){
            location.reload()
        }, 3000 );
        totalTentativas = 3;
    }
    else{
        $tentativas.innerHTML = "Tentativas restantes: " + totalTentativas;
    }
    totalTentativas -= 1;    
}

$button.addEventListener("click", Mentalista);
$button.addEventListener("click", ContarTentativas);





