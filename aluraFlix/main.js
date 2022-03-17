function adicionarFilme() {
  var campoFilmeFavorito = document.getElementById("filme").value;

  if (campoFilmeFavorito.endsWith(".jpg")) {
    listarFilmes(campoFilmeFavorito);
  } else {
    console.error("O formato de imagem não é válido");
  }

  document.getElementById("filme").value = "";
}

function listarFilmes(campoFilmeFavorito) {
  var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
