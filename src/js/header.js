document.addEventListener('DOMContentLoaded', function () {
  const openMenuButton = document.getElementById('open-menu');
  const modal = document.querySelector('.overlay');

  function openModal() {
    modal.classList.add('is-open');
  }

  function closeModal(event) {
    if (
      event.target.closest('.modal-icon-container') ||
      event.target.classList.contains('header-modal-menu-button')
    ) {
      modal.classList.remove('is-open');
    }
  }

  const menuItems = document.querySelectorAll('.header-modal-menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.remove('is-open');
    });
  });

  openMenuButton.addEventListener('click', openModal);
  document.addEventListener('click', closeModal);
});
