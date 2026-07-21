function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

document.querySelectorAll('form[data-validate]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach((input) => {
      const field = input.closest('.field') || input.parentElement;
      let ok = input.value.trim().length > 0;
      if (input.type === 'email') ok = ok && validateEmail(input.value);
      field.classList.toggle('has-error', !ok);
      if (!ok) valid = false;
    });
    if (valid) {
      window.showToast && window.showToast(form.dataset.successMessage || 'Thank you — received.');
      form.reset();
    }
  });
});
