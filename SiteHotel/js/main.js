// Ativar o carrossel
var myCarousel = document.querySelector('#carouselExample');
var carousel = new bootstrap.Carousel(myCarousel);

//carrosel automático 
document.addEventListener("DOMContentLoaded", function () {
  // Inicializa o primeiro carrossel
  var carousel1 = new bootstrap.Carousel(document.getElementById('carouselExample1'), {
    interval: 3000
  });

  // Inicializa o segundo carrossel
  var carousel2 = new bootstrap.Carousel(document.getElementById('carouselExample2'), {
    interval: 3000
  });
});


function mascaraCPF(cpf) {
  cpf.value = cpf.value
    .replace(/\D/g, '') // Remove qualquer caractere não numérico
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o ponto após os primeiros 3 dígitos
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o ponto após os próximos 3 dígitos
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o traço antes dos últimos 2 dígitos
}


function validarEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
var email = "example@email.com";
if (validarEmail(email)) {
  console.log("O e-mail é válido.");
} else {
  console.log("Por favor, insira um e-mail válido.");
}

function calcularDiaria(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  var numPessoas = parseInt(document.getElementById("pessoas").value);
  var numDias = parseInt(document.getElementById("dias").value);
  var tipoQuarto = parseInt(document.getElementById("quarto").value);

  var valorDiaria = numPessoas * numDias * tipoQuarto;

  document.getElementById("resultado").textContent = "O valor total da diária é R$ " + valorDiaria.toFixed(2);
}

var botao = document.getElementById("botaoReserva");
botao.addEventListener("click", calcularDiaria);