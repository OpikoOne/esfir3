function header(headerMenu, headerBasic, burgerMenu, menuBasic, menuBtn) {
  const headMenu = document.querySelector(headerMenu);
  const header = document.querySelector(headerBasic);
  const burger = document.querySelector(burgerMenu);
  const menu = document.querySelector(menuBasic);
  const btn = document.querySelector(menuBtn);
  const dropDown = document.querySelector(".dropdown");
  const dropDownMenu = document.querySelector(".dropdown-menu")
  
  
  
  function showModalByScroll() {
    if(window.matchMedia("(max-width:820px)").matches) {
      headMenu.style.display = "none";
    }else if(window.matchMedia("(min-width:820px)").matches){
      headMenu.style.display = "flex";
      if(document.documentElement.scrollTop > 25) {
          headMenu.style.display = "none";
          header.style.boxShadow = "0px 0px 5px grey";
        }else{
          headMenu.style.display = "flex";
          header.style.boxShadow = "";
        }
    }
    
  }

  function addActive() {
    header.classList.toggle('active')
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.querySelector("body").classList.toggle("lock");
  }
  

  window.addEventListener('scroll', showModalByScroll);
  burger.addEventListener('click', addActive);
}


export default header;


// 