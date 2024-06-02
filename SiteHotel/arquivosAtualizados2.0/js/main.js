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

function calcularHospedagem() {
  // Obter os valores selecionados pelo usuário
  var dias = document.getElementById('dias').value;
  var quarto = document.getElementById('quarto').value;
  var pessoas = document.getElementById('pessoas').value;

  // Converter os valores para números inteiros
dias = parseInt(dias);
quarto = parseInt(quarto);
pessoas = parseInt(pessoas);

// Calcular o valor total da hospedagem
var valorTotal = dias * quarto * pessoas;

// Exibir o resultado na tela
document.getElementById('resultado').textContent = 'R$ ' + valorTotal.toFixed(2);
}









// Seleciona o elemento do carrossel
var carousel = document.getElementById('carouselExampleCaptions');

// Inicializa o carrossel
var carouselObj = new bootstrap.Carousel(carousel, {
  interval: 2000, // Intervalo de 2 segundos
  wrap: true // Permite que o carrossel volte ao início após o último slide
});