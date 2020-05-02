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
    
    const contratoDoServidor = { 
      usuario: 'c.fvitor@yahoo.com.br', 
      cartoes: cartoesProServer 
    }

    $btnSync.classList.add('botaoSync--esperando');
    $btnSync.classList.remove('botaoSync--sincronizado');

    fetch(`https://ceep.herokuapp.com/cartoes/salvar`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(contratoDoServidor)
      })
      .then(function (response) { 
        console.log('Request', response);
        if(response.ok){
          $btnSync.classList.add('botaoSync--sincronizado');
          return;
        }
        throw new Error('Deu algum Problema');
      })
      .catch(()=>{
        console.log('Deu algum Erro');
        $btnSync.classList.add('botaoSync--deuRuim');
      })
      .finally(() => {
        $btnSync.classList.remove('botaoSync--esperando');
      })
  
    console.log('[cartoesProServer]', cartoesProServer);
  });

  

  $btnSync.classList.remove('no-js');
})();