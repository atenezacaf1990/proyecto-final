// Animación de barras de habilidades al cargar
window.addEventListener('load', () => {
  const fills = document.querySelectorAll('.fill');
  fills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0';
    setTimeout(() => { fill.style.width = width; }, 300);
  });
});

// Año actual en el footer
const year = new Date().getFullYear();
document.querySelector('footer p').innerHTML =
  document.querySelector('footer p').innerHTML.replace('2026', year);
