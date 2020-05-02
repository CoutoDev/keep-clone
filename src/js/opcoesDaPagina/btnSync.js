// IIFE
;(function() {
  const $btnSync = document.querySelector('#btnSync');

  $btnSync.addEventListener('click', function() {
    const arrayDeCartoes = Array.from(
      document.querySelectorAll('.cartao')
    );
    const cartoesProServer = arrayDeCartoes.map(function(cartao) {
      const conteudo = cartao.querySelector('p').innerText;
      const cor = getComputedStyle(cartao).getPropertyValue('background-color');
  
      const cartaoProServer = {
        conteudo: conteudo,
        cor,
      }
      return cartaoProServer;
    });
    

    fetch(`https://ceep.herokuapp.com/cartoes/salvar`, {
      method: 'POST',
      body: JSON.stringify({ usuario: 'c.fvitor@yahoo.com.br', cartoesProServer }),
      headers: {
          'content-type': 'application/json'
      }
      })
      .then(function (data) { 
        return data.json()	
      })
      .then(function (cartoes) { 
        console.log(cartoes)
      })
  
    console.log('[cartoesProServer]', cartoesProServer);
  });

  

  $btnSync.classList.remove('no-js');
})();