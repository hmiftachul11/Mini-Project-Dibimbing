// Sample data - replace this with your actual data
const menuData = [
    { name: 'Salmon Veggies', price: 150000 },
    { name: 'Chicken Pasta', price: 120000 },
    { name: 'Vegetarian Pizza', price: 100000 },
    { name: 'Salmon Veggies', price: 150000 },
    { name: 'Chicken Pasta', price: 120000 },
    { name: 'Vegetarian Pizza', price: 100000 },
    // Add more menus as needed
];

// Function to create a card element for each menu menu
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
                    <h5 class="fw-bold my-auto">Rp. ${menu.price}</h5>
                    <a href="#" class="btn rounded-pill fw-semibold text-white"
                        style="background-color: #FE9D02;">Add to Cart</a>
                </div>
            </div>
        </div>
    </div>`;
}

// Get the container for menu cards
const menuCardsContainer = document.getElementById('menuCards');

// Map through the menu data and create cards for each menu
menuData.forEach(menu => {
    menuCardsContainer.innerHTML += createMenuCard(menu);
});