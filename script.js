// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
  const likeBtn = document.getElementById('likeBtn');
  const likeCountSpan = document.getElementById('likeCount');

  let count = 0;

  // Adiciona o evento de clique ao botão de curtir
  likeBtn.addEventListener('click', () => {
    count++;
    likeCountSpan.textContent = count;
    
    // Pequena animação visual de confirmação no console
    console.log(`Post curtido! Total de curtidas: ${count}`);
  });
});
