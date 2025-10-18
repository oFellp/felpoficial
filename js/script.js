const toggler = document.querySelector('.navbar-toggler');
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('#navbarNav');

/* Abrir menu */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('open');
});

/* Fechar menu quando clicar em algum link */
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide(); 

    toggler.classList.remove('open');
  });
});
