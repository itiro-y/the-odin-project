const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


// Exercise
// <p>
const paragraph = document.createElement('p');
paragraph.textContent = 'Hey, I\'m red!';
paragraph.style.cssText = 'color:red;';
container.appendChild(paragraph);

// <h3>
const header3 = document.createElement('h3');
header3.textContent = 'I\'m a blue h3!';
header3.style.cssText = 'color:blue';
container.appendChild(header3);

// div
const div0 = document.createElement('div');
div0.style.cssText = 'border: 1px solid black; background-color:pink';

const header1 = document.createElement('h1');
header1.textContent = 'I\'m in the div!';

const paragraph1 = document.createElement('p');
paragraph1.textContent = 'Me too!';

div0.appendChild(header1);
div0.appendChild(paragraph1);
container.appendChild(div0);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e){
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});


