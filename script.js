// Pequenos toques de interação — nada que atrapalhe o carregamento.

(function () {
  var topbar = document.querySelector('.topbar');

  // Sombra na barra superior ao rolar a página.
  function onScroll() {
    if (window.scrollY > 12) {
      topbar.style.boxShadow = '0 6px 18px rgba(0,0,0,.35)';
    } else {
      topbar.style.boxShadow = 'none';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Copiar o número ao clicar segurando Alt/Option, como atalho extra.
  var whatsappCard = document.querySelector('.whatsapp-card');
  if (whatsappCard && navigator.clipboard) {
    whatsappCard.addEventListener('click', function (e) {
      if (e.altKey) {
        e.preventDefault();
        navigator.clipboard.writeText('13 99774-5472');
        var small = whatsappCard.querySelector('small');
        var original = small.textContent;
        small.textContent = 'Número copiado!';
        setTimeout(function () { small.textContent = original; }, 1800);
      }
    });
  }
})();
