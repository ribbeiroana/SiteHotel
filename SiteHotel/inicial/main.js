function calcularTotal() {
    // variaveis
    var dias = parseInt(document.getElementById("dias").value);
    var pessoas = parseInt(document.getElementById("pessoas").value);

    var valorDiaria = 100; // Valor da diária por pessoa
    var total = dias * pessoas * valorDiaria;

    // Exibir o total calculado na página
    document.getElementById("total").innerText = "Total da Hospedagem: R$" + total.toFixed(2);
}
  // Ativar o carrossel
  var myCarousel = document.querySelector('#carouselExample');
  var carousel = new bootstrap.Carousel(myCarousel);

//carrosel automático 
document.addEventListener("DOMContentLoaded", function() {
  // Inicializa o primeiro carrossel
  var carousel1 = new bootstrap.Carousel(document.getElementById('carouselExample1'), {
      interval: 3000 
  });

  // Inicializa o segundo carrossel
  var carousel2 = new bootstrap.Carousel(document.getElementById('carouselExample2'), {
      interval: 3000 
  });
});
function calcularReserva() {
  var quartoSelecionado = document.getElementById("quarto").value;
  var quantidadePessoas = document.getElementById("pessoas").value;
  var quantidadeDias = document.getElementById("dias").value;

  var valorReserva = parseInt(quartoSelecionado) * parseInt(quantidadePessoas) * parseInt(quantidadeDias);

  document.getElementById("resultado").innerText = "O valor total da reserva é: " + valorReserva + " reais.";
}