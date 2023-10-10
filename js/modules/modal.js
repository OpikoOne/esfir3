function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide-modal');
  modal.classList.remove('show-modal');
  // document.body.style.overflow = '';
}

function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show-modal');
  modal.classList.remove('hide-modal');
  // document.body.style.overflow = 'hidden';
}



function modal(triggerSelector, modalSelector) {
  const btnModal = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  
  btnModal.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector));
  })
 

  

 modal.addEventListener('click', (e) => {
   if(e.target === modal || e.target.getAttribute('data-close') == "") {
    closeModal(modalSelector);
   }
 })

 document.addEventListener('keydown', (e) => {
  if(e.code == 'Escape' && modal.classList.contains('show')) {
    closeModal(modalSelector);
  }
 })

 function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
}


export default modal;
