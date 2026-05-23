
document.addEventListener('DOMContentLoaded', () => {

  const menuToggle = document.getElementById('mobile-menu');
  const nav = document.querySelector('header nav');
  const navLinks = document.querySelectorAll('header nav a');

  // Segurança: só executa se existir
  if (!menuToggle || !nav) return;

  // Abrir/fechar menu
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Fechar ao clicar em link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

  // 🔥 NOVO: fechar ao clicar fora do menu
  document.addEventListener('click', (e) => {
    if (
      !nav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  // 🔥 NOVO: fechar ao redimensionar tela (evita bug desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

});

