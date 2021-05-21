const arrowNext = document.querySelector('.tab-arrow-next');
const arrowPrev = document.querySelector('.tab-arrow-prev');
const tab = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab-content');

const tabArr = Array.from(tab);
const tabContentArr = Array.from(content);


let counter = 0;

function reset() {
  tabArr.forEach(item => {
    item.classList.remove('tab-active');
  });

  tabContentArr.forEach(el => {
    el.classList.remove('tab-content-active');
  })
};

function activatedTab() {
  tabArr.find((item, i) => {
    if (counter == i) {
      item.classList.add('tab-active');
    }
  });
};

function activatedTabContent() {
  tabContentArr.find((el, index) => {
    if (counter == index) {
      el.classList.add('tab-content-active');
    };
  });
};

arrowNext.addEventListener('click', () => {
  reset();

  if (counter == (tabArr.length - 1)) {
    counter = 0;
  } else {
    counter++;
  }

  activatedTab();
  activatedTabContent();

});

arrowPrev.addEventListener('click', () => {
  reset();

  if (counter == 0) {
    counter = tabArr.length - 1;
  } else {
    counter--;
  }

  activatedTab();
  activatedTabContent();

});