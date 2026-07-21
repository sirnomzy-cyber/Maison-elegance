let _productsCache = null;

async function loadProducts() {
  if (_productsCache) return _productsCache;
  // Products are embedded via js/products-data.js (loaded before this file)
  // rather than fetched, so the catalog works even when the page is opened
  // through a preview tool or file:// context where fetch() of local files fails.
  _productsCache = (typeof MAISON_PRODUCTS !== 'undefined') ? MAISON_PRODUCTS : [];
  return _productsCache;
}

function starRating(rating) {
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function productCardHTML(p) {
  const isWished = getWishlistSafe().includes(p.sku);
  return `
  <article class="product-card">
    <div class="product-card__media">
      <a href="product-details.html?sku=${encodeURIComponent(p.sku)}" aria-label="View ${p.name}">
        <img class="img-base" src="${p.image}" alt="${p.name}" loading="lazy">
        <img class="img-hover" src="${p.imageHover}" alt="" loading="lazy">
      </a>
      <div class="product-card__badges">
        ${p.badges.map(b => `<span class="badge badge-${b.toLowerCase().replace(' ', '')}">${b}</span>`).join('')}
      </div>
      <button class="product-card__wishlist ${isWished ? 'is-active' : ''}" data-wishlist-toggle data-sku="${p.sku}" aria-pressed="${isWished}" aria-label="Add ${p.name} to wishlist">
        <svg viewBox="0 0 24 24" fill="${isWished ? 'var(--color-gold)' : 'none'}" stroke="var(--color-black)" stroke-width="1.5"><path d="M12 21s-7-4.35-9.5-8.5C.8 9 2 5 6 5c2.2 0 3.8 1.4 6 4 2.2-2.6 3.8-4 6-4 4 0 5.2 4 3.5 7.5C19 16.65 12 21 12 21z"/></svg>
      </button>
      <div class="product-card__actions">
        <button class="btn btn-primary btn-sm btn-block" data-add-to-cart
          data-sku="${p.sku}" data-name="${p.name}" data-price="${p.salePrice || p.price}"
          data-image="${p.image}" data-size="${p.sizes[0]}" data-color="${p.colors[0]}">Add to Bag</button>
      </div>
    </div>
    <a href="product-details.html?sku=${encodeURIComponent(p.sku)}">
      <div class="product-card__collection">${p.collection}</div>
      <div class="product-card__name">${p.name}</div>
      <div class="product-card__meta">
        <span class="price">${p.salePrice ? `<span class="price strike">$${p.price.toLocaleString()}</span> $${p.salePrice.toLocaleString()}` : `$${p.price.toLocaleString()}`}</span>
        <span class="product-card__rating" aria-label="${p.rating} out of 5 stars, ${p.reviews} reviews">${starRating(p.rating)} <span>(${p.reviews})</span></span>
      </div>
    </a>
  </article>`;
}

function getWishlistSafe() {
  try { return JSON.parse(localStorage.getItem('maison_wishlist')) || []; }
  catch (e) { return []; }
}

function renderProductGrid(products, selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = products.map(productCardHTML).join('');
  // Re-bind wishlist + cart handlers for newly injected markup
  el.querySelectorAll('[data-wishlist-toggle]').forEach((btn) => {
    btn.addEventListener('click', (e) => { e.preventDefault(); toggleWishlist(btn.dataset.sku, btn); });
  });
  el.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart({
        sku: btn.dataset.sku, name: btn.dataset.name, price: parseFloat(btn.dataset.price),
        image: btn.dataset.image, size: btn.dataset.size, color: btn.dataset.color, qty: 1
      });
      document.querySelector('[data-cart-drawer]')?.classList.add('is-open');
      document.querySelector('[data-drawer-overlay]')?.classList.add('is-visible');
    });
  });
}
