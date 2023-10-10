function price(){
  const toggles = document.querySelectorAll(".price__block");
  const additions = document.querySelectorAll(".price__addition_block");

  toggles.forEach(toggle =>{
    toggle.addEventListener("click", ({ target }) =>{
      toggle.parentNode.classList.toggle('active')
    })
  })


  additions.forEach(addition =>{
    addition.addEventListener("click", ({ target }) =>{
      addition.parentNode.classList.toggle('active')
    })
  })
  

  
}



export default price;