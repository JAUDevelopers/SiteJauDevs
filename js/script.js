// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
	constructor(el) {
	  this.el = el
	  this.chars = '!<>-_\\/[]{}—=+*^?#________'
	  this.update = this.update.bind(this)
	}
	setText(newText) {
	  const oldText = this.el.innerText
	  const length = Math.max(oldText.length, newText.length)
	  const promise = new Promise((resolve) => this.resolve = resolve)
	  this.queue = []
	  for (let i = 0; i < length; i++) {
		const from = oldText[i] || ''
		const to = newText[i] || ''
		const start = Math.floor(Math.random() * 40)
		const end = start + Math.floor(Math.random() * 40)
		this.queue.push({ from, to, start, end })
	  }
	  cancelAnimationFrame(this.frameRequest)
	  this.frame = 0
	  this.update()
	  return promise
	}
	update() {
	  let output = ''
	  let complete = 0
	  for (let i = 0, n = this.queue.length; i < n; i++) {
		let { from, to, start, end, char } = this.queue[i]
		if (this.frame >= end) {
		  complete++
		  output += to
		} else if (this.frame >= start) {
		  if (!char || Math.random() < 0.28) {
			char = this.randomChar()
			this.queue[i].char = char
		  }
		  output += `<span class="dud">${char}</span>`
		} else {
		  output += from
		}
	  }
	  this.el.innerHTML = output
	  if (complete === this.queue.length) {
		this.resolve()
	  } else {
		this.frameRequest = requestAnimationFrame(this.update)
		this.frame++
	  }
	}
	randomChar() {
	  return this.chars[Math.floor(Math.random() * this.chars.length)]
	}
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
	'Somos a JAU Developers',
	'Seja bem-vindo(a) !',
	':)'
  ];
  
  const el = document.querySelector('.text');
  const fx = new TextScramble(el);
  
  let counter = 0;
  const next = () => {
	let animationSpeed = 1800; // Velocidade padrão
	let horizontalPosition = ''; // Posição horizontal padrão
  
	// Verifica se a largura da tela é menor que 768px
	if (window.innerWidth < 768) {
	  animationSpeed = 3000; // Define uma velocidade mais lenta
	  horizontalPosition = 'center';
	}
  
	// Configuração do estilo para o elemento de texto
	el.style.textAlign = horizontalPosition;
  
	// Configura a velocidade e texto atual
	fx.setText(phrases[counter]).then(() => {
	  setTimeout(next, animationSpeed); // Usa a velocidade determinada
	});
  
	// Atualiza o índice para o próximo texto
	counter = (counter + 1) % phrases.length;
  };
  
  next();

  fetch('../menu.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('conteudo').innerHTML = html;
        });