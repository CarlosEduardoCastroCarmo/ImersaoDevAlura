const $btnSortear = document.querySelector("#btnSortear");
const $btnJogar = document.querySelector("#btnJogar");
const $btnReload = document.querySelector("#btnReload");
const $divResultado = document.querySelector("#resultado");

var carta1 = {
    nome: "Shikamaru",
    imagem: "https://i.pinimg.com/736x/7d/cd/6b/7dcd6b3bc096dfc249557dcecd58dfc7.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        chakra: 6
    }
}

var carta2 = {
    nome:"Gaara",
    imagem: "https://nerdhits.com.br/wp-content/uploads/2021/09/gaara-1-1200x720.jpg",
    atributos: {
        ataque: 7,
        defesa: 9,
        chakra: 8
    }
}

var carta3 = {
    nome: "Kakashi",
    imagem: "http://3.bp.blogspot.com/-jggfdeX363o/TdwAij7lCJI/AAAAAAAAAeA/tu-QFSdbGCQ/s1600/kakashi-chidori.jpg",
    atributos: {
        ataque: 8,
        defesa: 7,
        chakra: 5
    }    
}

var carta4 = {
    nome: "Naruto",
    imagem: "https://i0.wp.com/wallpapercave.com/wp/wp2418352.jpg",
    atributos: {
        ataque: 10,
        defesa: 9,
        chakra: 10
    }    
}

var carta5 = {
    nome: "Sasuke",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2021/04/Sasuke-Evil-Entry-4-910x455.jpg",
    atributos: {
        ataque: 10,
        defesa: 10,
        chakra: 8
    }    
}

var carta6 = {
    nome: "Rock-Lee",
    imagem: "https://i0.wp.com/www.fatosdesconhecidos.com.br/wp-content/uploads/2017/09/maxresdefault-2-5.jpg?resize=600%2C338&ssl=1",
    atributos: {
        ataque: 8,
        defesa: 8,
        chakra: 0
    }    
}

var carta7 = {
    nome: "Sakura",
    imagem: "https://zenkai7home.files.wordpress.com/2020/02/4b66bcd4b1520c0d0398cbbb0268499e6997181714947065560.jpg?w=488",
    atributos: {
        ataque: 8,
        defesa: 8,
        chakra: 8
    }    
}

var carta8 = {
    nome: "Madara-Uchiha",
    imagem: "https://i.pinimg.com/550x/76/cc/b8/76ccb862ef5602162b8c0148e7be6c8a.jpg",
    atributos: {
        ataque: 10,
        defesa: 10,
        chakra: 10
    }    
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * cartas.length);

    while(numeroCartaJogador == numeroCartaMaquina) {

        numeroCartaJogador = parseInt(Math.random() * cartas.length);
    }  

    cartaJogador = cartas[numeroCartaJogador];

    $btnSortear.disabled = true;
    $btnJogar.disabled = false;

    exibirCartaJogador();
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado () {
    var radioAtributo = document.getElementsByName("atributo")

    for(var i = 0; i < radioAtributo.length; i++) {

        if(radioAtributo[i].checked == true){
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var htmlResultado = "";
    var atributoSelecionado = obtemAtributoSelecionado();
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    if(valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Você Venceu</p>"
    }
    else if(valorCartaJogador < valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Você Perdeu</p>"
    }  
    else {
        htmlResultado = "<p class='resultado-final'>Temos um empate</p>"
    }    

    $divResultado.innerHTML = htmlResultado;

    $btnJogar.disabled = true;
    exibirCartaMaquina();
    $btnReload.disabled = false;   
   
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + 
        cartaJogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>" 
}

function exibirCartaMaquina() {

    var divCartaMaquina = document.getElementById("carta-maquina");

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for(var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + 
        cartaMaquina.atributos[atributo] + "</p>";
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}