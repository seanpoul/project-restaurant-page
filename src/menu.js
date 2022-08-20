import breakfast from './images/breakfast-plate.jpg';
import lunch from './images/lunch-platter.jpg';
import dinner from './images/dinner-spaghetti.jpg';

const menuContainer = document.createElement('div');

menuContainer.className = "menuContainer";

const menuItem = [
    {
        image: breakfast,
        name: "Kings breakfast",
        description: "Breakfast fit for a king.",
        price: "$10.49"
    }, {
        image: lunch,
        name: "Assorted lunch platter",
        description: "Assortment of fruits with specialty cheese on crunchy crackers.",
        price: "$14.49"
    }, {
        image: dinner,
        name: "Spaghetti bolognese",
        description: "Delicious spaghetti and meatballs.",
        price: "$16.99"
    }
];

for (let i = 0; i < menuItem.length; i++) {
    let menuItemContainer = document.createElement('div');
    let menuImage = document.createElement('img');
    let menuNDP = document.createElement('div');
    let menuName = document.createElement('h3');
    let menuDescription = document.createElement('p');
    let menuPrice = document.createElement('p');

    menuItemContainer.className = "menuItems";
    menuNDP.className = "NDP"

    menuImage.src = menuItem[i].image;
    menuName.textContent = menuItem[i].name;
    menuDescription.textContent = menuItem[i].description;
    menuPrice.textContent = menuItem[i].price;

    menuContainer.appendChild(menuItemContainer);
    menuItemContainer.appendChild(menuImage);
    menuItemContainer.appendChild(menuNDP);
    menuNDP.appendChild(menuName);
    menuNDP.appendChild(menuDescription);
    menuNDP.appendChild(menuPrice);
};

export default menuContainer;