// Função para mostrar a mensagem "Sinta-se Amada 💕"
function mostrarMensagem() {
    const mensagens = [
        "Você é a melhor coisa que já aconteceu na minha vida e muito importante para mim e para todos nos",
        "Não importa a tempestade ou chuva, eu sempre vou estar aqui para ser telheado seu abrigo seu porto seguro",
       
    ];
    document.getElementById('mensagem').innerText = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById('mensagem').classList.remove('hidden');
    document.getElementById('mensagem').classList.add('show');
}

// Função para exibir a carta de mensagem
function mostrarCarta(titulo, texto) {
    const mensagemElement = document.getElementById('mensagem');
    
    // Apaga qualquer mensagem anterior antes de mostrar uma nova
    mensagemElement.classList.add('hidden');
    
    // Espera um pouco antes de mudar a mensagem
    setTimeout(function() {
        mensagemElement.innerHTML = `<strong>${titulo}</strong><br>${texto}`;
        mensagemElement.classList.remove('hidden');
        mensagemElement.classList.add('show');
    }, 200);
}

window.onload = function() {
    // Mensagem final fixa
    const mensagemFinal = "Eu te amo mais a cada dia, e estou sempre ao seu lado. 💖";
    document.getElementById('mensagem-final').innerText = mensagemFinal;
};
