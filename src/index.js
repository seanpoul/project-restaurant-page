import homeContainer from '../src/home.js';
import './style.css';

const content = document.querySelector('#content');
const header = document.createElement('h1');
const homeTab = document.createElement('div');
const menuTab = document.createElement('div');
const contactTab = document.createElement('div');
const navigateDiv = document.createElement('div');

content.appendChild(header);
content.appendChild(navigateDiv);
navigateDiv.className = "navigate";
navigateDiv.appendChild(homeTab);
navigateDiv.appendChild(menuTab);
navigateDiv.appendChild(contactTab);

header.textContent = "Fabulous food stuff emporium";
homeTab.textContent = "Home";
menuTab.textContent = "Menu";
contactTab.textContent = "Contact";

content.appendChild(homeContainer);