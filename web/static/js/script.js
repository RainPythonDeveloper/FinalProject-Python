



// document.addEventListener("DOMContentLoaded", function () {
//   // Находим все кнопки "Жою"
//   var removeButtons = document.querySelectorAll(".header__cart-item-remove");

//   // Добавляем обработчик события для каждой кнопки
//   removeButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       // Находим родительский элемент, который представляет карточку товара
//       chose_list_item.remove();
//       count -= 1;
//       document.getElementById('header__cart-notice').innerHTML = count;
//       chose_list.appendChild(chose_list_item);
//     });
//   });
// });

let choseList = document.querySelector(".header__cart-list-item");
let total = document.querySelector('.total');
let count = 0;
let totalPrice = 0;


// function runMe(e) {
//   return function() {
//       count += 1;
//       document.getElementById('header__cart-notice').innerHTML = count;

//       totalPrice += parseFloat(e.getAttribute('id'));

//       let chosenListItem = document.createElement("li");
//       chosenListItem.className = "header__cart-item";
//       chosenListItem.innerHTML = `
//       <img src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=1920&q=85" alt="" class="header__cart-img" />
//       <div class="header__cart-item-info">
//           <div class="header__cart-item-head">
//               <h5 class="header__cart-item-name">iPhone 14 Midnight 128GB</h5>
//               <div class="header__cart-item-price-wrap">
//                   <span class="header__cart-item-price">${parseFloat(e.getAttribute('id'))}₸</span>
//               </div>
//           </div>
//           <div class="header__cart-item-body">
//               <span class="header__cart-item-description">жеткізу: 2 апта</span>
//               <span class="header__cart-item-remove" onclick="dele(this)">Жою</span>
//           </div>
//       </div>
//       `;

//       total.innerText = Math.floor(totalPrice).toLocaleString(); // Round down the total price
//       choseList.appendChild(chosenListItem);
//   };
// }


function runMe(e) {
  return function() {
      count += 1;
      document.getElementById('header__cart-notice').innerHTML = count;

      totalPrice += parseFloat(e.getAttribute('id'));

      let chosenListItem = document.createElement("li");
      chosenListItem.className = "header__cart-item";
      chosenListItem.innerHTML = `
      <img src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=1920&q=85" alt="" class="header__cart-img" />
      <div class="header__cart-item-info">
          <div class="header__cart-item-head">
              <h5 class="header__cart-item-name">iPhone 14 Midnight 128GB</h5>
              <div class="header__cart-item-price-wrap">
                  <span class="header__cart-item-price">${parseFloat(e.getAttribute('id')).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}₸</span>
              </div>
          </div>
          <div class="header__cart-item-body">
              <span class="header__cart-item-description">жеткізу: 2 апта</span>
              <span class="header__cart-item-remove" onclick="dele(this)">Жою</span>
          </div>
      </div>
      `;

      total.innerText = Math.floor(totalPrice).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 }) + "₸"; // Round down the total price
      choseList.appendChild(chosenListItem);
  };
}



function dele(element) {
    let priceToRemove = parseFloat(element.parentElement.previousElementSibling.querySelector('.header__cart-item-price').innerText);
    
    totalPrice -= priceToRemove;
    total.innerText = totalPrice.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 }) + "₸";
    
    count -= 1;
    document.getElementById('header__cart-notice').innerHTML = count;

    // Remove the clicked item
    element.closest('.header__cart-item').remove();
}

var addButtons = document.getElementsByClassName('addtocart');
Array.prototype.forEach.call(addButtons, function(button) {
    button.onclick = runMe(button);
});