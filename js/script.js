const formularioBusca = document.querySelector(".busca");
const inputBusca = document.querySelector(".busca input");

formularioBusca.addEventListener("submit", function(event) {
    if (inputBusca.value.trim() === "") {
        event.preventDefault();
    }
});


const parametros = new URLSearchParams(window.location.search);
const jogoPesquisado = parametros.get("jogo");

if (jogoPesquisado) {
    const produtos = document.querySelectorAll(".produto");
    const mensagemBusca = document.querySelector("#mensagemBusca");

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
        mensagemBusca.style.display = "block";
    }
}