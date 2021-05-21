const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');

const tabsArray = Array.from(tabs);
const tabContentArray = Array.from(tabContent);

function resetAll() {
  tabsArray.forEach(item => {
    item.classList.remove('tab-active');
  });

  tabContentArray.forEach(item => {
    item.classList.remove('tab-content-active');
  });
};


tabsArray.forEach((item, index) => {
  item.addEventListener('click', () => {
    resetAll();
    item.classList.add('tab-active');

    tabContentArray.find((el, i) => {
      if (index === i) {
        el.classList.add('tab-content-active');
      }
    });
  });
});


