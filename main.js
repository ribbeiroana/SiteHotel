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

  /*document.addEventListener('DOMContentLoaded', function() {
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
});*/
function initMap(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    var mapOptions = {
      center: {lat: lat, lng: lng},
      zoom: 12
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      title: 'Você está aqui!'
    });
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("Permissão para geolocalização negada pelo usuário.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Informações de localização estão indisponíveis.");
        break;
      case error.TIMEOUT:
        alert("Tempo de espera para obter a localização do usuário esgotado.");
        break;
      case error.UNKNOWN_ERROR:
        alert("Ocorreu um erro desconhecido.");
        break;
    }
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initMap, showError);
  } else {
    alert("Geolocalização não é suportada pelo seu navegador.");
  }