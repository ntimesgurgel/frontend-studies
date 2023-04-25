const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const elements = [button, body, footer];

button.addEventListener('click', () => {
    elements.forEach((item)=>item.classList.toggle('dark-mode'));
});