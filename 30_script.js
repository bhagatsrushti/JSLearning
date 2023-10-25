
// console.log(`DOM API getElementBy Id()`);
// const elementTitle = document.getElementById('title');
// console.log(elementTitle.innerHTML);


// console.log(`=========DOM API getElementByTagName()============`);
// const elementH2 = document.getElementsBeyTagName('h2');
// console.log(elementH2);
// console.log(elementH2(0).innerHTML);
// console.log(elementH2(1).innerHTML);

// console.log(`======DOM API getElementByClassName()=========`);
// const elementTechStack=document.getElementsByClassName('techStack');
// console.log(elementTechStack);
// console.log(elementTechStack[0].innerHTML);
// console.log(elementTechStack[1].innerHTML);


// console.log(`=======DOM API querySelector()========`);
// const h2Element = document.querySelector('h2'); //selecting element by 
// console.log(h2Element.innerHTML);

// console.log(`Selecting an element by id`);
// const h3Element = document.querySelector('#title');
// console.log(h3ElementTitle.innerHTML);

// console.log(`Selecting an element by id`);
// const elementTechStack2 = document.querySelector('#title');
// console.log(elementTechStack2.innerHTML);






console.log(`============================= DOM API getElementById=======================`);
const elementById=document.getElementById('title');
console.log(elementById);
console.log(elementById.innerHTML);

console.log(`==================== DOM API getElementsByTagName=================================`);
const elementByName=document.getElementsByTagName('h2');
console.log(elementByName[0].innerHTML);
console.log(elementByName[1].innerHTML);
console.log(elementByName);

console.log(`===================== DOM API getElementsByClassName===========================`);
const elementByClass = document.getElementsByClassName('techStack');
console.log(elementByClass);

console.log('=================== DOM API querySelector() =======================');
const h2Element = document.querySelector('h2'); // Selecting element by tag name or element name
console.log(h2Element.innerHTML);

console.log('Selecting an element by id');
const h2ElementTitle = document.querySelector('#title');
console.log(h2ElementTitle.innerHTML);

console.log('Selecting an element by class name');
const elementTechStack = document.querySelector('.teckStack');
console.log(elementTechStack.innerHTML);

console.log('======= DOM API querySelectorAll() ===========');
const h2ElementAll = document.querySelectorAll('h2');
console.log(h2ElementAll[0].innerHTML);
console.log(h2ElementAll[1].innerHTML);

console.log('querySelectorAll() with class');
const elementAll = document.querySelectorAll('.teckStack');
console.log(elementAll[0].innerHTML);
console.log(elementAll[1].innerHTML);

console.log(`========== Update or change the text of an element ==================`);
const titleElement = document.querySelector('#title');
titleElement.innerHTML = 'Learning API - Document Object Model';
console.log('Selecting an element by class name');

console.log(elementTechStack.innerHTML);