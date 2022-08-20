import homeContainer from '../src/home.js';
import menuContainer from '../src/menu.js';
import contactContainer from '../src/contact.js';
import './style.css';

const content = document.querySelector('#content');
const header = document.createElement('div');
const headerName = document.createElement('h1');
const navigateDiv = document.createElement('div');
const homeTab = document.createElement('button');
const menuTab = document.createElement('button');
const contactTab = document.createElement('button');
const bodyContent = document.createElement('div');
const footerTrademark = document.createElement('footer');

content.appendChild(header);
header.appendChild(headerName);
header.appendChild(navigateDiv);
navigateDiv.appendChild(homeTab);
navigateDiv.appendChild(menuTab);
navigateDiv.appendChild(contactTab);
content.appendChild(bodyContent);
content.appendChild(footerTrademark);

header.className = "header"
navigateDiv.className = "navigateDiv";
homeTab.className = "tabLink";
menuTab.className = "tabLink";
contactTab.className = "tabLink";
bodyContent.className = "bodyContent";
footerTrademark. className = "footer";

headerName.textContent = "Fabulous food stuff emporium";
homeTab.textContent = "Home";
menuTab.textContent = "Menu";
contactTab.textContent = "Contact";
footerTrademark.innerHTML = 'Back ground photo by  <a href="https://unsplash.com/es/@thomascpark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Park</a> on <a href="https://unsplash.com/collections/OWwpYCx7o_0/bilder-f%C3%BCr-auditpartner.de---unsplash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>" ';

bodyContent.append(homeContainer);

navigateDiv.addEventListener('click', (event) => {
    bodyContent.innerHTML = ""
    if (event.target.textContent === homeTab.textContent) {
        bodyContent.append(homeContainer);
    }
    if (event.target.textContent === menuTab.textContent) {
        bodyContent.append(menuContainer);
    }
    if (event.target.textContent === contactTab.textContent) {
        bodyContent.append(contactContainer);
    }
})