function calcularTotal() {
    // Obter os valores dos campos de entrada
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

  document.addEventListener('DOMContentLoaded', function() {
    const switcher = document.querySelector('btn1');

    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        var className = document.body.className;

        if (className === "light-theme") {
            this.textContent = "Dark";
        } else {
            this.textContent = "Light";
        }

        console.log('current class name: ' + className);
    });
});