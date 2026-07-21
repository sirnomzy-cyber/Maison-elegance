const CART_KEY = 'maison_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch (e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(item) {
  const cart = getCart();
  const existing = cart.find((c) => c.sku === item.sku && c.size === item.size && c.color === item.color);
  if (existing) existing.qty += item.qty || 1;
  else cart.push({ ...item, qty: item.qty || 1 });
  saveCart(cart);
  window.showToast && window.showToast(`${item.name} added to your bag`);
  renderMiniCart();
}
function removeFromCart(sku, size, color) {
  const cart = getCart().filter((c) => !(c.sku === sku && c.size === size && c.color === color));
  saveCart(cart);
  renderMiniCart();
}
function updateQty(sku, size, color, delta) {
  const cart = getCart();
  const item = cart.find((c) => c.sku === sku && c.size === size && c.color === color);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
    renderMiniCart();
  }
}
function cartTotal() {
  return getCart().reduce((sum, c) => sum + c.price * c.qty, 0);
}
function updateCartBadge() {
  const count = getCart().reduce((sum, c) => sum + c.qty, 0);
  document.querySelectorAll('[data-cart-count]').forEach((el) => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderMiniCart() {
  const body = document.querySelector('[data-cart-body]');
  const totalEl = document.querySelector('[data-cart-total]');
  if (!body) return;
  const cart = getCart();
  body.innerHTML = cart.length ? cart.map((c) => `
    <div class="cart-line">
      <img src="${c.image}" alt="${c.name}" loading="lazy">
      <div class="flex-col" style="flex:1; gap:6px;">
        <div class="flex-between">
          <span style="font-weight:500; font-size:0.9rem;">${c.name}</span>
          <span class="price">$${(c.price * c.qty).toLocaleString()}</span>
        </div>
        <span style="font-size:var(--fs-caption); color:var(--color-text);">${c.color} / ${c.size}</span>
        <div class="flex-between">
          <div class="cart-line__qty">
            <button aria-label="Decrease quantity" onclick="updateQty('${c.sku}','${c.size}','${c.color}',-1)">−</button>
            <span>${c.qty}</span>
            <button aria-label="Increase quantity" onclick="updateQty('${c.sku}','${c.size}','${c.color}',1)">+</button>
          </div>
          <button style="font-size:var(--fs-caption); text-decoration:underline;" onclick="removeFromCart('${c.sku}','${c.size}','${c.color}')">Remove</button>
        </div>
      </div>
    </div>
  `).join('') : `<p style="padding:var(--sp-4) 0;">Your bag is currently empty.</p>`;
  if (totalEl) totalEl.textContent = `$${cartTotal().toLocaleString()}`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderMiniCart();

  const cartToggle = document.querySelector('[data-cart-toggle]');
  const cartDrawer = document.querySelector('[data-cart-drawer]');
  const cartOverlay = document.querySelector('[data-drawer-overlay]');
  const cartClose = document.querySelector('[data-cart-close]');

  function openCart() {
    cartDrawer && cartDrawer.classList.add('is-open');
    cartOverlay && cartOverlay.classList.add('is-visible');
  }
  function closeCart() {
    cartDrawer && cartDrawer.classList.remove('is-open');
    cartOverlay && cartOverlay.classList.remove('is-visible');
  }
  cartToggle && cartToggle.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
  cartClose && cartClose.addEventListener('click', closeCart);
  cartOverlay && cartOverlay.addEventListener('click', closeCart);

  document.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', () => {
      addToCart({
        sku: btn.dataset.sku,
        name: btn.dataset.name,
        price: parseFloat(btn.dataset.price),
        image: btn.dataset.image,
        size: btn.dataset.size || 'One Size',
        color: btn.dataset.color || 'Default',
        qty: 1
      });
      openCart();
    });
  });
});
