<script>
  const menuToggle = document.getElementById('mobile-menu');
  const nav = document.querySelector('header nav');
  const navLinks = document.querySelectorAll('header nav a');

  // Abre/fecha menu ao clicar no hamburguer
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Fecha o menu ao clicar em qualquer link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
</script>
