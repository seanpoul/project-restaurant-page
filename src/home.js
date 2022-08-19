const homeContainer = document.createElement('div');
const testimonialBox = document.createElement('div');
const testimonialRestaurant = document.createElement('div');
const testimonialRestaurantTitle = document.createElement('div');
const testimonialRestaurantContent = document.createElement('div');
const hoursBox = document.createElement('div');
const hoursRestaurant = document.createElement('div');
const hoursRestaurantTitle = document.createElement('div');
const hoursRestaurantContent = document.createElement('ol');
const locationBox = document.createElement('div');
const locationRestaurant = document.createElement('div');
const locationRestaurantTitle = document.createElement('div');
const locationRestaurantContent = document.createElement('div');

homeContainer.appendChild(testimonialBox);
testimonialBox.appendChild(testimonialRestaurant);
testimonialRestaurant.appendChild(testimonialRestaurantTitle);
testimonialRestaurant.appendChild(testimonialRestaurantContent);
homeContainer.appendChild(hoursBox);
hoursBox.appendChild(hoursRestaurant);
hoursRestaurant.appendChild(hoursRestaurantTitle);
hoursRestaurant.appendChild(hoursRestaurantContent);
homeContainer.appendChild(locationBox);
locationBox.appendChild(locationRestaurant);
locationRestaurant.appendChild(locationRestaurantTitle);
locationRestaurant.appendChild(locationRestaurantContent);

homeContainer.className = "homeContainer";
testimonialBox.className = "box";
hoursBox.className = "box";
locationBox.className = "box";
testimonialRestaurant.className = "testimonialInfo";
hoursRestaurant.className = "hoursInfo";
locationRestaurant.className = "locationInfo";

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

testimonialRestaurantTitle.textContent = "Testimony"
testimonialRestaurantContent.textContent = "wow so good! much likes! - real person";
hoursRestaurantTitle.textContent = "Hours";

for (let i = 0; i < days.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = days[i] + " - 12pm to 6pm";
    hoursRestaurantContent.appendChild(listItem);
}

locationRestaurantTitle.textContent = "Location";
locationRestaurantContent.textContent = "Your mom! haha"

export default homeContainer;