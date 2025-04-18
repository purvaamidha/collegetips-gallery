// Isotope for filtering
var iso = new Isotope('.gallery', {
  itemSelector: '.gallery-item',
  layoutMode: 'fitRows'
});

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    let filterValue = button.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
});

// GLightbox for fullscreen view
const lightbox = GLightbox({
  selector: '.glightbox'
});
