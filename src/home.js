const homeContainer = document.createElement('div');
const testimonialRestaurant = document.createElement('div');
const testimonialRestaurantTitle = document.createElement('div');
const testimonialRestaurantContent = document.createElement('div');
const hoursRestaurant = document.createElement('div');
const hoursRestaurantTitle = document.createElement('div');
const hoursRestaurantContent = document.createElement('ol');
const locationRestaurant = document.createElement('div');
const locationRestaurantTitle = document.createElement('div');
const locationRestaurantContent = document.createElement('div');
const footerTrademark = document.createElement('footer');

homeContainer.className = "bodyContent";
testimonialRestaurant.className = "testimonialInfo";
hoursRestaurant.className = "hoursInfo";
locationRestaurant.className = "locationInfo";

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

homeContainer.appendChild(testimonialRestaurant);
testimonialRestaurant.appendChild(testimonialRestaurantTitle);
testimonialRestaurant.appendChild(testimonialRestaurantContent);
homeContainer.appendChild(hoursRestaurant);
hoursRestaurant.appendChild(hoursRestaurantTitle);
hoursRestaurant.appendChild(hoursRestaurantContent);
homeContainer.appendChild(locationRestaurant);
locationRestaurant.appendChild(locationRestaurantTitle);
locationRestaurant.appendChild(locationRestaurantContent);
homeContainer.appendChild(footerTrademark);

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
footerTrademark.innerHTML = 'Back ground photo by  <a href="https://unsplash.com/es/@thomascpark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Park</a> on <a href="https://unsplash.com/collections/OWwpYCx7o_0/bilder-f%C3%BCr-auditpartner.de---unsplash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>" ';


export default homeContainer;