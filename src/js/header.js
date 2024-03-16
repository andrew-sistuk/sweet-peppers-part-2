document.addEventListener('DOMContentLoaded', function () {
  const headerMenuButton = document.getElementById('open-menu');
  let modalContentLoaded = false;

  headerMenuButton.addEventListener('click', function () {
    if (!modalContentLoaded) {
      const modalXhr = new XMLHttpRequest();
      modalXhr.open('GET', './partials/modal.html', true);
      modalXhr.onload = function () {
        if (modalXhr.status >= 200 && modalXhr.status < 300) {
          const modalContent = modalXhr.responseText;
          document.body.insertAdjacentHTML('beforeend', modalContent);
          modalContentLoaded = true;
          openHeaderModal();
        } else {
          console.error(
            'Failed to load modal content:',
            modalXhr.status,
            modalXhr.statusText
          );
        }
      };
      modalXhr.send();
    } else {
      openHeaderModal();
    }
  });

  function openHeaderModal() {
    const headerModal = document.getElementById('modal-content');
    if (headerModal) {
      headerModal.style.display = 'block';
    } else {
      console.error('Header Modal content not found');
    }
  }

  function closeHeaderModal() {
    const headerModal = document.getElementById('modal-content');
    if (headerModal) {
      headerModal.style.display = 'none';
    } else {
      console.error('Header Modal content not found');
    }
  }
});
