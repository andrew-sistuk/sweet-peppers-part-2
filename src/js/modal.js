document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    const closeButton = event.target.closest('#close-menu');
    const menuItemLink = event.target.closest('.header-modal-menu-item');
    const orderButton = event.target.closest('.header-modal-menu-button');

    if (closeButton || menuItemLink || orderButton) {
      const overlay = document.querySelector('.overlay');
      if (overlay) {
        overlay.style.display = 'none';
      } else {
        console.error('Overlay element not found');
      }
    }
  });
});
