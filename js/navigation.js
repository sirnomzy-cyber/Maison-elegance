const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  mobileMenuClose && mobileMenuClose.focus();
}
function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  navToggle && navToggle.focus();
}
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', openMobileMenu);
  mobileMenuClose && mobileMenuClose.addEventListener('click', closeMobileMenu);
  mobileMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMobileMenu));
}
