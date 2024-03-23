const reft = {
  openCloseMenuBtn: document.querySelector('[data-menu-open-close]'),

  openMenuBtnModal: document.querySelector('[data-menu-open-modal]'),
  closeMenuBtnModal: document.querySelector('[data-menu-close-modal]'),

  closeMenuInList: document.querySelector('[data-menu-close-list]'),
  closeMenuInOrder: document.querySelector('[data-menu-close-order]'),

  menu: document.querySelector('[data-menu]'),
  menuModal: document.querySelector('[data-menu-modal]'),
};

reft.openCloseMenuBtn.addEventListener('click', toggleMenu);
reft.openMenuBtnModal.addEventListener('click', toggleModal);
reft.closeMenuBtnModal.addEventListener('click', toggleModal);
reft.closeMenuInOrder.addEventListener('click', toggleModal);

reft.closeMenuInList.addEventListener('click', event => {
  if (event.currentTarget != event.target) {
    reft.menuModal.classList.toggle('is-open');
  }
});

function toggleMenu() {
  reft.menu.classList.toggle('is-open');
}

function toggleModal() {
  reft.menuModal.classList.toggle('is-open');
}
