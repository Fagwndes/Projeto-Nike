let body = document.querySelector("body");
let tenis = document.querySelector(".tn");

function mudarVisual(imagem) {
    // Adiciona classe para animação de saída
    tenis.classList.add("troca-efeito");

    // Espera a animação acabar antes de trocar a imagem
    setTimeout(() => {
        tenis.src = imagem;

        // Remove a classe para voltar ao estilo original
        tenis.classList.remove("troca-efeito");
    }, 500); // Tempo em milissegundos — deve combinar com a `transition` no CSS
}

   