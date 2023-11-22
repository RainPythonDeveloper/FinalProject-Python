// /* <li class="header__cart-item">
//     <img
//         src="https://img.tickid.vn/photos/resized/320x/83-1580889448-myphamohui-lgvina.png"
//         alt=""
//         class="header__cart-img"
//     />
//     <div class="header__cart-item-info">
//         <div class="header__cart-item-head">
//             <h5 class="header__cart-item-name">
//                 13-inch MacBook Air with M2 chip - Midnight
//             </h5>
//             <div class="header__cart-item-price-wrap">
//                 <span class="header__cart-item-price"
//                 >507 445,23₸</span
//                 >
//                 <span class="header__cart-item-multiply">x</span>
//                 <span class="header__cart-item-qnt">2</span>
//             </div>
//         </div>
//         <div class="header__cart-item-body">
//             <span class="header__cart-item-description"
//             >жеткізу: 2 апта</span
//             >
//             <span class="header__cart-item-remove">Жою</span>
//         </div>
//     </div>
// </li> */



// /* <div class="col l-2-4 m-4 c-6">
//     <a href="#" class="home-product-item">
//         <div
//             class="home-product-item__img"
//             style="background-image: url(https://img.tickid.vn/photos/resized/320x320/83-1580888419-myphamohui-lgvina.png);"
//         ></div>
//         <h4 class="home-product-item__name">
//             13-inch MacBook Air with M2 chip - Midnight
//         </h4>
//         <div class="home-product-item__price">
//             <span class="home-product-item__price-old"
//             >587 445,23₸</span
//             >
//             <span class="home-product-item__price-current"
//             >452 332,82₸</span
//             >
//         </div>
//         <div class="home-product-item__action">
//             <span
//                 class="home-product-item__like home-product-item__like--liked"
//             >
//                 <i
//                     class="home-product-item__like-icon-empty far fa-heart"
//                 ></i>
//                 <i
//                     class="home-product-item__like-icon-fill fas fa-heart"
//                 ></i>
//                 <button class="addtocart" onclick="addcart()">
//                     <i class="fas fa-shopping-cart" style="color: #f63d30; display: flex;"></i>
//                 </button>
//             </span>
//             <div class="home-product-item__rating">
//                 <i
//                     class="home-product-item__star--gold fas fa-star"
//                 ></i>
//                 <i
//                     class="home-product-item__star--gold fas fa-star"
//                 ></i>
//                 <i
//                     class="home-product-item__star--gold fas fa-star"
//                 ></i>
//                 <i
//                     class="home-product-item__star--gold fas fa-star"
//                 ></i>
//                 <i class="fas fa-star"></i>
//             </div>
//             <div class="home-product-item__sold">88 Сатылды</div>
//         </div>
//         <div class="home-product-item__origin">
//             <span class="home-product-item__brand">Сатушы:</span>
//             <span class="home-product-item__origin-name"
//             >Ерлан</span
//             >
//         </div>
//         <div class="home-product-item__favourite">
//             <i class="fas fa-check "></i>
//             <span>Танымал</span>
//         </div>
//         <div class="home-product-item__sale-off">
//             <span class="home-product-item__sale-off-percent"
//             >23%</span
//             >
//             <span class="home-product-item__sale-off-label"
//             >Тиім</span
//             >
//         </div>
//     </a>
// </div> */



document.addEventListener("DOMContentLoaded", function () {
    // Находим все кнопки "Жою"
    var removeButtons = document.querySelectorAll(".header__cart-item-remove");

    // Добавляем обработчик события для каждой кнопки
    removeButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            // Находим родительский элемент, который представляет карточку товара
            var cartItem = event.target.closest(".header__cart-item");

            // Проверяем, найден ли элемент, прежде чем удалять
            if (cartItem) {
                // Удаляем карточку товара из DOM
                cartItem.remove();
            }
        });
    });
});

// <li class="header__cart-item">
//     <img
//         src="https://img.tickid.vn/photos/resized/320x/83-1580884899-myphamohui-lgvina.png"
//         alt=""
//         class="header__cart-img"
//     />
//     <div class="header__cart-item-info">
//         <div class="header__cart-item-head">
//             <h5 class="header__cart-item-name">
//                 13-inch MacBook Air with M2 chip - Midnight
//             </h5>
//             <div class="header__cart-item-price-wrap">
//                 <span class="header__cart-item-price"
//                 >507 445,23₸
//                 </span>
//                 <span class="header__cart-item-multiply">x</span>
//                 <span class="header__cart-item-qnt">3</span>
//             </div>
//         </div>
//         <div class="header__cart-item-body">
//             <span class="header__cart-item-description"
//             >жеткізу: 2 апта
//             </span>
//             <span class="header__cart-item-remove">Жою</span>
//         </div>
//     </div>
// </li>

let count = 0;
let list = document.querySelectorAll('.col l-2-4 m-4 c-6');

let listcards = [];
let chose_list = document.querySelector(".header__cart-list-item");

function addcart() {
    count += 1;
    // Update the text content of the element with class "header__cart-notice"
    document.getElementById('header__cart-notice').innerHTML = count;
    let chose_list_item = document.createElement("li");
    chose_list_item.className = "header__cart-item";
    chose_list_item.innerHtml = `
          <img
                        src="https://img.tickid.vn/photos/resized/320x/83-1580889448-myphamohui-lgvina.png"
                        alt=""
                        class="header__cart-img"
                      />
                      <div class="header__cart-item-info">
                        <div class="header__cart-item-head">
                          <h5 class="header__cart-item-name">
                            13-inch MacBook Air with M2 chip - Midnight
                          </h5>
                          <div class="header__cart-item-price-wrap">
                            <span class="header__cart-item-price"
                              >507 445,23₸</span
                            >
                            <span class="header__cart-item-multiply">x</span>
                            <span class="header__cart-item-qnt">2</span>
                          </div>
                        </div>
                        <div class="header__cart-item-body">
                          <span class="header__cart-item-description"
                            >жеткізу: 2 апта</span
                          >
                          <span class="header__cart-item-remove">Жою</span>
                        </div>
                      </div>
    ` 
    chose_list.appendChild(chose_list_item);
}

let products = [
    {
        name: "27' Монитор Philips 271E1SD/01 черный",
        price: "115500",
        image: "./assets/img/Без названия.jpg",
    }
];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement("a");
        newDiv.className = "home-product-item";
        newDiv.style.width = "73%";
        newDiv.innerHTML = `
        <div
        class="home-product-item__img"
        style="background-image: url(https://img.tickid.vn/photos/resized/320x320/83-1580888419-myphamohui-lgvina.png);"
    ></div>
    <h4 class="home-product-item__name">
        ${value.name}
    </h4>
    <div class="home-product-item__price">
        <span class="home-product-item__price-old"
        >${value.price}₸</span
        >
        <span class="home-product-item__price-current"
        >${value.price}₸</span
        >
    </div>
    <div class="home-product-item__action">
        <span
            class="home-product-item__like home-product-item__like--liked"
        >
            <i
                class="home-product-item__like-icon-empty far fa-heart"
            ></i>
            <i
                class="home-product-item__like-icon-fill fas fa-heart"
            ></i>
            <button class="addtocart" onclick="addcart()">
                <i class="fas fa-shopping-cart" style="color: #f63d30; display: flex;"></i>
            </button>
        </span>
        <div class="home-product-item__rating">
            <i
                class="home-product-item__star--gold fas fa-star"
            ></i>
            <i
                class="home-product-item__star--gold fas fa-star"
            ></i>
            <i
                class="home-product-item__star--gold fas fa-star"
            ></i>
            <i
                class="home-product-item__star--gold fas fa-star"
            ></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="home-product-item__sold">88 Сатылды</div>
    </div>
    <div class="home-product-item__origin">
        <span class="home-product-item__brand">Сатушы:</span>
        <span class="home-product-item__origin-name"
        >Ерлан</span
        >
    </div>
    <div class="home-product-item__favourite">
        <i class="fas fa-check "></i>
        <span>Танымал</span>
    </div>
    <div class="home-product-item__sale-off">
        <span class="home-product-item__sale-off-percent"
        >23%</span
        >
        <span class="home-product-item__sale-off-label"
        >Тиім</span
        >
    </div>
        `;
        list.appendChild(newDiv);
    })
}
initApp();



