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


  function selectMenuItem(item) {
    // Remove a classe 'selected' de todos os itens
    document.querySelectorAll('.navbar-links li').forEach(li => li.classList.remove('selected'));
    // Adiciona a classe 'selected' apenas ao item clicado
    item.classList.add('selected');
}






