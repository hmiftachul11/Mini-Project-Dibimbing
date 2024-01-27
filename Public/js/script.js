const menuData = [
  { name: "Salmon Veggies", price: 10.50 },
  { name: "Chicken Pasta", price: 10.50 },
  { name: "Vegetarian Pizza", price: 12.5 },
  { name: "Salmon Veggies", price: 10.50 },
  { name: "Chicken Pasta", price: 10.50 },
  { name: "Vegetarian Pizza", price: 12.5 },
];

function createMenuCard(menu) {
  return `
    <div class="col-md-4 mb-4">
        <div class="card m-3"
            style="border-radius: 16px; box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);">
            <img src="./Public/images/cards/card-1.svg" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold">${menu.name}</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.
                </p>
                <div class="d-flex justify-content-between align-menus-center">
                    <h5 class="fw-bold my-auto">$ ${menu.price}</h5>
                    <a href="#" class="btn rounded-pill fw-semibold text-white rounded-sm"
                        style="background-color: #FE9D02;">Add to Cart</a>
                </div>
            </div>
        </div>
    </div>`;
}

const menuCardsContainer = document.getElementById("menuCards");

menuData.forEach((menu) => {
  menuCardsContainer.innerHTML += createMenuCard(menu);
});
