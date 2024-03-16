document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    const closeButton = event.target.closest('#close-menu');
    if (closeButton) {
      const overlay = document.querySelector('.overlay');
      if (overlay) {
        overlay.style.display = 'none';
      } else {
        console.error('Overlay element not found');
      }
    }
  });
});
