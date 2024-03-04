document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.grid-item');
  
    imagens.forEach(function(imagem) {
      imagem.addEventListener('click', function() {
        this.classList.toggle('zoom');
      });
    });
  });
  