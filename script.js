// Initialize Isotope for filters
var iso = new Isotope('.gallery', {
  itemSelector: '.gallery-item',
  layoutMode: 'fitRows'
});

// Filter buttons
document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    let filterValue = button.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });

    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Lightbox
GLightbox({
  selector: '.glightbox'
});
