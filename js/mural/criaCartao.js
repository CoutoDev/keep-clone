function criarHTMLDoCartao(conteudo) {

    const contador = 0;

    const $opcoesCartao = `
    <div class="opcoesDoCartao">
        <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
        <svg><use xlink:href="#iconeRemover"></use></svg>
        </button>

        <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
        <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
        Padrão
        </label>

        <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
        Importante
        </label>

        <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
        Tarefa
        </label>

        <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
        Inspiração
        </label>
    </div>
    `;

    const $cartao = `
    <article id="cartao_1" tabindex="0" class="cartao">
        ${$opcoesCartao}
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
    </article>`;

    return $cartao;
    
}