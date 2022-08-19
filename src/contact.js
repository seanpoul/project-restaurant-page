const contactContainer = document.createElement('div');
const workerOneBox = document.createElement('div');
const workerOneInfo = document.createElement('div');
const workerOneName = document.createElement('div');
const workerOneNumber = document.createElement('div');
const workerTwoBox = document.createElement('div');
const workerTwoInfo = document.createElement('div');
const workerTwoName = document.createElement('div');
const workerTwoNumber = document.createElement('div');
const workerThreeBox = document.createElement('div');
const workerThreeInfo = document.createElement('div');
const workerThreeName = document.createElement('div');
const workerThreeNumber = document.createElement('div');

contactContainer.appendChild(workerOneBox);
workerOneBox.appendChild(workerOneInfo);
workerOneInfo.appendChild(workerOneName);
workerOneInfo.appendChild(workerOneNumber);
contactContainer.appendChild(workerTwoBox);
workerTwoBox.appendChild(workerTwoInfo);
workerTwoInfo.appendChild(workerTwoName);
workerTwoInfo.appendChild(workerTwoNumber);
contactContainer.appendChild(workerThreeBox);
workerThreeBox.appendChild(workerThreeInfo);
workerThreeInfo.appendChild(workerThreeName);
workerThreeInfo.appendChild(workerThreeNumber);

contactContainer.className = "contactContainer";
workerOneBox.className = "box";
workerTwoBox.className = "box";
workerThreeBox.className = "box";
workerOneInfo.className = "workerOneInfo";
workerTwoInfo.className = "workerTwoInfo";
workerThreeInfo.className = "workerThreeInfo";

workerOneName.textContent = "Bob"
workerTwoName.textContent = "Mary";
workerThreeName.textContent = "Joe";

workerOneNumber.textContent = "555-555-5554";
workerTwoNumber.textContent = "555-555-5555"
workerThreeNumber.textContent = "555-555-5556"

export default contactContainer;