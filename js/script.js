const formularioBusca = document.querySelector(".busca");
const inputBusca = document.querySelector(".busca input");

formularioBusca.addEventListener("submit", function(event) {
    if (inputBusca.value.trim() === "") {
        event.preventDefault();
    }
});

const apelidos = {
    "gta": "Grand Theft Auto V",
    "gta 5": "Grand Theft Auto V",
    "fnaf": "Five Nights at Freddy's",
    "rdr2": "Red Dead Redemption 2",
    "rdr": "Red Dead Redemption 2",
    "fifa":"EA SPORTS FC™ 27"
};

const parametros = new URLSearchParams(window.location.search);
const jogoPesquisado = parametros.get("jogo");

if (jogoPesquisado) {
    const produtos = document.querySelectorAll(".produto");
    const mensagemBusca = document.querySelector("#mensagemBusca");

    let encontrado = false;

    const busca = jogoPesquisado.toLowerCase();
    const buscaCorrigida = apelidos[busca] || busca;

    produtos.forEach(produto => {
        const nomeJogo = produto.dataset.jogo;

        if (nomeJogo.toLowerCase().includes(buscaCorrigida.toLowerCase())) {
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

const generoPesquisado = parametros.get("genero");
const produtos = document.querySelectorAll(".produto");

if (generoPesquisado) {
    produtos.forEach(produto => {
        const genero = produto.dataset.genero;

        if (genero === generoPesquisado) {
            produto.style.display = "flex";
        } else {
            produto.style.display = "none";
        }
    });
}
