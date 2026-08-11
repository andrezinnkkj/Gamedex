const parametros = new URLSearchParams(window.location.search);
const jogoPesquisado = parametros.get("jogo");

if (jogoPesquisado) {
    const produtos = document.querySelectorAll(".produto");
    let encontrado = false;

    produtos.forEach(produto => {
        const nomeJogo = produto.dataset.jogo;

        if (nomeJogo.toLowerCase().includes(jogoPesquisado.toLowerCase())) {
            encontrado = true;

            produto.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });

    if (!encontrado) {
        alert("Jogo não encontrado!");
    }
}