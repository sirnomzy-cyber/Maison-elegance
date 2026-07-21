// ===== Header scroll behavior =====
const header = document.querySelector('.site-header');
const backToTop = document.querySelector('.back-to-top');
const headerStartsTransparent = header && header.classList.contains('is-transparent');

function onScroll() {
  const y = window.scrollY;
  if (header) {
    header.classList.toggle('is-scrolled', y > 40);
    if (headerStartsTransparent) {
      // Only stay transparent while at the very top, over the hero image.
      // Once scrolled, switch to a solid header so nav text remains visible.
      header.classList.toggle('is-transparent', y <= 40);
    }
  }
  if (backToTop) backToTop.classList.toggle('is-visible', y > 600);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ===== Accordion (FAQ) =====
document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    const panel = item.querySelector('.accordion-panel');
    const isOpen = item.classList.contains('is-open');
    item.classList.toggle('is-open', !isOpen);
    trigger.setAttribute('aria-expanded', String(!isOpen));
    panel.style.maxHeight = !isOpen ? panel.scrollHeight + 'px' : null;
  });
});

// ===== Toast =====
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
}
window.showToast = showToast;
