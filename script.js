
// Simple English/Nepali toggle for demonstration
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en], [data-np]');
  elements.forEach(el => {
    if (el.innerText === el.getAttribute('data-en')) {
      el.innerText = el.getAttribute('data-np');
    } else {
      el.innerText = el.getAttribute('data-en');
    }
  });
}
