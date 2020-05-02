;(function() {
    window.onload = () => {
        fetch('https://ceep.herokuapp.com/cartoes/carregar')
            .then((data )=> {
                return data.json();
            })
            .then((cartoes) => {
                cartoes.forEach((cartao, index) => {
                    criaCartao(cartao.conteudo, cartao.cor);
                });
            })
    }
})();