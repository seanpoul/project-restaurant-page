const homeContainer = document.createElement('div');
const testimonialRestaurant = document.createElement('div');
const hoursRestaurant = document.createElement('div');
const hoursRestaurantTitle = document.createElement('div');
const hoursRestaurantContent = document.createElement('ol');
const locationRestaurant = document.createElement('div');
const locationRestaurantContent = document.createElement('div');
const footerTrademark = document.createElement('footer');

homeContainer.className = "bodyContent";
hoursRestaurant.className = "hoursInfo"
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

homeContainer.appendChild(testimonialRestaurant);
homeContainer.appendChild(hoursRestaurant);
hoursRestaurant.appendChild(hoursRestaurantTitle);
hoursRestaurant.appendChild(hoursRestaurantContent);
homeContainer.appendChild(locationRestaurant);
homeContainer.appendChild(locationRestaurantContent);
homeContainer.appendChild(footerTrademark);

testimonialRestaurant.textContent = "wow so good! much likes! - real person";
hoursRestaurantTitle.textContent = "Hours";

for (let i = 0; i < days.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = days[i] + " - 12pm to 6pm";
    hoursRestaurantContent.appendChild(listItem);
}

locationRestaurant.textContent = "Location";
locationRestaurantContent.textContent = "Your mom! haha"
footerTrademark.textContent = "I own all this so no worries. kidding";



export default homeContainer;