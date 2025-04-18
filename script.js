// Isotope filter
var iso = new Isotope('.gallery', {
  itemSelector: '.gallery-item',
  layoutMode: 'fitRows'
});

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    iso.arrange({ filter: filter });

    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Lightbox
GLightbox({ selector: '.glightbox' });
