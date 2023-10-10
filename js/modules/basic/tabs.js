function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  // Tabs.1
  const tabs = document.querySelectorAll(tabsSelector),
      tabContent = document.querySelectorAll(tabsContentSelector),
      tabParents = document.querySelector(tabsParentSelector);

  if (tabs.length === 0) return;
  
  
  function hideTabContent() {
    tabContent.forEach(item => {
      item.classList.add('hide-tab');
      item.classList.remove('show-tab');
    })

    tabs.forEach(item => {
      item.classList.remove(activeClass.slice(1));
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].classList.add('show-tab');
    tabContent[i].classList.remove('hide-tab');

    tabs[i].classList.add(activeClass.slice(1));
  }

  hideTabContent();
  showTabContent();

  tabParents.addEventListener('click', (e) => {
    const target = e.target;

    if(target && target.classList.contains(tabsSelector.slice(1))) {

      tabs.forEach((item, i) => {
        if(target == item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })
}


export default tabs;







