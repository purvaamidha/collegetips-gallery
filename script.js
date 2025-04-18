// Isotope.js for filtering images by category
var iso = new Isotope('.gallery', {
  itemSelector: '.gallery-item',
  layoutMode: 'fitRows',
});

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', function () {
    const filterValue = button.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });

    // Add active class to the clicked filter button
    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// GLightbox for fullscreen image preview
const lightbox = GLightbox({
  selector: '.glightbox',  // All images with this class will open in a lightbox
  touchNavigation: true,    // Enable touch navigation for mobile
  loop: true,               // Loop through images when in the lightbox
  zoomable: true,           // Allow zooming of images
  openEffect: 'fade',       // Add fade effect when opening the lightbox
  closeEffect: 'fade',      // Add fade effect when closing the lightbox
  closeButton: true         // Enable close button in lightbox
});
