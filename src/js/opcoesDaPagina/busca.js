;(function() {
    const $busca = $('#busca'); 

    $busca.on('input', (infosDoEvento) => {
        const elementoEmFocoDuranteEvento = infosDoEvento.target;
        const valorDaBusca = elementoEmFocoDuranteEvento.value;
        const $cartoes = document.querySelectorAll('.cartao');

        $cartoes.forEach(($cartao) => {
            const conteudo = $cartao.querySelector('p').textContent;
            const conteudoNormalizado = $cartao.toLowerCase();
            const valorDaBuscaNormalizado = valorDaBusca.toLowerCase().trim();

            if(conteudoNormalizado.includes(valorDaBuscaNormalizado)) {
                $cartao.style.display = 'block';
                return;
            }
            $cartao.style.display = 'none';
        });

    });
    $busca.removeClass('no-js');
})();