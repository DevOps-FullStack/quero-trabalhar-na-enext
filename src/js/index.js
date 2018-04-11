(function () {
  'use strict';
  const { potions } = require('../potions');

  let $menu = document.querySelectorAll('.icon-menu,.icon-close');

  let $itemPotions = document.querySelectorAll('.item-potion');

  let $modal = document.querySelector('.modal');

  document.querySelector('.modal-close')
    .addEventListener('click', event => {
      event.preventDefault();
      $modal.style.display = 'none';
    });


  $menu[0].addEventListener('click', event => {
    event.preventDefault();

    document.querySelector('.menu').classList.add('menu-open');
  });

  $menu[1].addEventListener('click', event => {
    event.preventDefault();

    document.querySelector('.menu').classList.remove('menu-open');
  });

  $itemPotions.forEach(ele => {

    ele.addEventListener('click', event => {
      event.preventDefault();
      $modal.style.display = 'inline';

      let img = ele.querySelector('img').src;
      let { name, price, effect, ingredients } = potions[ele.dataset.itemId];

      let listIngredients = '';

      ingredients.forEach(item => listIngredients += `<li>${item}</li>`);

      let content = `
        <div class="col">
          <img src="${img}" alt="">
        </div>
        <div class="col">
          <h3>${name}</h3>
          <h3>Use/Effect</h3>
          <p>${effect}</p>
          <h3>Ingredients:</h3>
          <ul>
              ${listIngredients} 
          </ul>
          <h3>Price:</h3>
          <p>$ ${price}</p>
          <button class="button button-orange">Add to Cart</button>
        </div>`;

      $modal.querySelector('.row').innerHTML = content;
    });
  });
})();