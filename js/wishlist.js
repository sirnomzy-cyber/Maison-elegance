const WISHLIST_KEY = 'maison_wishlist';

function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
  catch (e) { return []; }
}
function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  updateWishlistBadge();
}
function toggleWishlist(sku, btn) {
  let list = getWishlist();
  const exists = list.includes(sku);
  list = exists ? list.filter((s) => s !== sku) : [...list, sku];
  saveWishlist(list);
  if (btn) {
    btn.classList.toggle('is-active', !exists);
    btn.setAttribute('aria-pressed', String(!exists));
  }
  window.showToast && window.showToast(exists ? 'Removed from wishlist' : 'Saved to your wishlist');
}
function updateWishlistBadge() {
  const count = getWishlist().length;
  document.querySelectorAll('[data-wishlist-count]').forEach((el) => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}
document.addEventListener('DOMContentLoaded', () => {
  updateWishlistBadge();
  const list = getWishlist();
  document.querySelectorAll('[data-wishlist-toggle]').forEach((btn) => {
    const sku = btn.dataset.sku;
    if (list.includes(sku)) { btn.classList.add('is-active'); btn.setAttribute('aria-pressed', 'true'); }
    btn.addEventListener('click', (e) => { e.preventDefault(); toggleWishlist(sku, btn); });
  });
});
