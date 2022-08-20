const menuContainer = document.createElement('div');

const breakfastBox = document.createElement('div');
const breakfastItem = document.createElement('div');
const breakfastTitle = document.createElement('div');
const breakfastDescription = document.createElement('div');
const breakfastImg = document.createElement('div');

const lunchBox = document.createElement('div');
const lunchItem = document.createElement('div');
const lunchTitle = document.createElement('div');
const lunchDescription = document.createElement('div');
const lunchImg = document.createElement('div');

const dinnerBox = document.createElement('div');
const dinnerItem = document.createElement('div');
const dinnerTitle = document.createElement('div');
const dinnerDescription = document.createElement('div');
const dinnerImg = document.createElement('div');

menuContainer.appendChild(breakfastBox);
breakfastBox.appendChild(breakfastItem);
breakfastItem.appendChild(breakfastTitle);
breakfastItem.appendChild(breakfastDescription);
menuContainer.appendChild(lunchBox);
lunchBox.appendChild(lunchItem);
lunchItem.appendChild(lunchTitle);
lunchItem.appendChild(lunchDescription);
menuContainer.appendChild(dinnerBox);
dinnerBox.appendChild(dinnerItem);
dinnerItem.appendChild(dinnerTitle);
dinnerItem.appendChild(dinnerDescription);

menuContainer.className = "menuContainer";
breakfastBox.className = "box";
lunchBox.className = "box";
dinnerBox.className = "box";
breakfastItem.className = "breakfastItem";
lunchItem.className = "lunchItem";
dinnerItem.className = "dinnerItem";





export default menuContainer;