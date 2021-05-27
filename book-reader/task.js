const fontSize = document.querySelectorAll('.font-size');
const bookContent = document.querySelector('.book__content');
const colorTxt = document.querySelectorAll('.book__control_color .color');
const colorBackground = document.querySelectorAll('.book__control_background .color');

const fontSizeArray = Array.from(fontSize);
const colorTxtArray = Array.from(colorTxt);
const colorBackgroundArray = Array.from(colorBackground);

function resetSize() {
  fontSizeArray.forEach(item => {
    item.classList.remove('font-size_active');
  });

  bookContent.classList.remove('book_fs-small', 'book_fs-big');
};

function resetColorText() {
  colorTxtArray.forEach(item => {
  item.classList.remove('color_active');
  });

  bookContent.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
};

function resetBgColor() {
  colorBackgroundArray.forEach(item => {
    item.classList.remove('color_active');
  });

  bookContent.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
}

fontSizeArray.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    resetSize();
    item.classList.add('font-size_active');
    if (item.dataset.size === 'small') {
      bookContent.classList.add('book_fs-small');
    } else if (item.dataset.size === 'big') {
      bookContent.classList.add('book_fs-big');
    }
  });
});

colorTxtArray.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    resetColorText();
    item.classList.add('color_active');
    if (item.dataset.textColor === 'black') {
      bookContent.classList.add('book_color-black');
    } else if (item.dataset.textColor === 'gray') {
      bookContent.classList.add('book_color-gray');
    } else if (item.dataset.textColor === 'whitesmoke') {
      bookContent.classList.add('book_color-whitesmoke');
    }
  });
});

colorBackgroundArray.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    resetBgColor();
    item.classList.add('color_active');
    if (item.dataset.bgColor === 'black') {
      bookContent.classList.add('book_bg-black');
    } else if (item.dataset.bgColor === 'gray') {
      bookContent.classList.add('book_bg-gray');
    } else if (item.dataset.bgColor === 'white') {
      bookContent.classList.add('book_bg-white');
    }
  });
});
