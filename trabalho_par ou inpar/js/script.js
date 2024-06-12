var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função
  verificar();

});


//Função
function verificar() {

  let numero = Number(document.getElementById("primeiro_numero_inteiro").value);

  var resto = numero % 2;

  if (resto == 0) {
      document.getElementById("resultado").value = "o Número é par";
  } else{
    document.getElementById("resultado").value = "o Número é impar"
  }
  let resultado_soma = primeiro_numero_inteiro;
}
