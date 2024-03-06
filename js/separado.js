// Função para manipular a visibilidade dos elementos de conteúdo
function switchContent(targetId) {
    // Ocultar todos os elementos de conteúdo
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
      content.classList.remove('active');
    });

    // Exibir o elemento de conteúdo alvo
    var targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  }

  // Event listener para os cliques nos links de navegação
  var navbarLinks = document.querySelectorAll('.navbar-link');
  navbarLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Prevenir o comportamento padrão do link
      event.preventDefault();

      // Obter o id do alvo do link
      var targetId = link.getAttribute('href').slice(1);

      // Trocar o conteúdo com base no id do alvo
      switchContent(targetId);
    });
  });


// Verificar se a página foi recarregada
var isReloaded = performance.navigation.type === 1;

// Se a página foi recarregada, ajustar a posição de rolagem para o meio da página
if (isReloaded) {
  window.addEventListener('load', function() {
    var windowHeight = window.innerHeight;
    var scrollToPosition = windowHeight / 2;
    window.scrollTo(0, scrollToPosition);
  });
}

