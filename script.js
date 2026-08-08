// Aguarda o carregamento do DOM para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', () => {
  const likeBtn = document.getElementById('likeBtn');
  const likeCountSpan = document.getElementById('likeCount');

  let count = 0;

  // Evento de clique para incrementar a contagem
  likeBtn.addEventListener('click', () => {
    count++;
    likeCountSpan.textContent = count;
  });
});
<script src="script.js"></script>
