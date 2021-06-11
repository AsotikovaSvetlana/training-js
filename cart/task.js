const product = document.querySelectorAll('.product');
const basket = document.querySelector('.cart__products');
const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const cart = document.querySelector('.cart');
const productArray = Array.from(product);
const productQuantityValueArray = Array.from(productQuantityValue);


productArray.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    if (event.target.classList.contains('product__quantity-control_dec')) {
      productQuantityValueArray.forEach((element, i) => {
        if (index === i && element.textContent > 1) {
          element.textContent--;
        }
      })
    }

    if (event.target.classList.contains('product__quantity-control_inc')) {
      productQuantityValueArray.forEach((element, i) => {
        if (index === i) {
          element.textContent++;
        }
      })
    }
  })

  item.addEventListener('click', (event) => {
    let obj = {
      id: item.dataset.id,
      image: item.querySelector('.product__image').src,
      quantity: item.querySelector('.product__quantity-value').textContent.trim()
    };

    if (event.target.classList.contains('product__add')) {
      if (basket.children.length !== 0) {
        if (basket.querySelector(`[data-id="${item.dataset.id}"]`)) {
          productQuantityValueArray.forEach((e, i) => {
            if (i === index) {
              let value = basket.querySelector(`[data-id="${item.dataset.id}"]`).querySelector('.cart__product-count');
              value.textContent = Number(value.textContent) + Number(e.textContent);
            }
          })
        } else {
          addProductInBasket(obj);
          showBasket();
        }
      } else {
        addProductInBasket(obj);
        showBasket();
      }
    }
  })
})

basket.addEventListener('click', (event) => {
  if (event.target.classList.contains('cart__product-remove')) {
    event.target.closest('.cart__product').remove();
    hideBasket();
  }
})

function addProductInBasket(obj) {
  let cartProduct = `
    <div class="cart__product" data-id="${obj.id}">
      <img class="cart__product-image" src=${obj.image}>
      <div class="cart__product-count">${obj.quantity}</div>
      <span class="cart__product-remove">&times;</span>
    </div>
  `
  basket.insertAdjacentHTML('beforeend', cartProduct);
}

function showBasket() {
  cart.classList.remove('cart-hidden');
}

function hideBasket() {
  if (basket.children.length === 0) {
    cart.classList.add('cart-hidden');
  }
}