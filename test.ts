// Example of adding a class to a container
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const header = document.createElement('h1');
header.innerText = 'Welcome to Earn App';
container.appendChild(header);

const button = document.createElement('button');
button.className = 'button';
button.innerText = 'Click Me';
container.appendChild(button);