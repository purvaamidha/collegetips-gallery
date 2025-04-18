// Isotope filter
var iso = new Isotope('.gallery', {
  itemSelector: '.gallery-item',
  layoutMode: 'masonry'
});

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', function () {
    let filterValue = button.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });

    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Lightbox init
GLightbox({
  selector: '.glightbox'
});
