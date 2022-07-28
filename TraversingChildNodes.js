// const ul = document.querySelector('ul');
// console.log(ul.children, "children");
// console.log(ul.childNodes, "childNodes");
// console.log(ul.firstChild, "firstChild");
// console.log(ul.firstElementChild, "firstElementChild");
// console.log(ul.lastChild, "lastChild");
// console.log(ul.lastElementChild, "lastElementChild")

// // fetch parent through firstChild element by ID 
// const firstLi = document.querySelector('li');
// console.log(firstLi.parentNode,"parentNode");
// console.log(firstLi.parentElement,"parentElement");

// //previous sibling
// console.log(ul.previousElementSibling, "previousSibling");
// console.log(ul.nextElementSibling, "nextElementSibling");


// const ul = document.body.firstElementChild.nextElementSibling;
// console.log(ul);



// create new element
// const ul = document.querySelector('ul');
// ul.innerHTML = ul.innerHTML + '<li>Item 4</li>'

// addNewElement

const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
ul.appendChild(newLi); //both works ok
// ul.append('some text...'); //for adding text
// ul.prepend('some text...'); //for adding text
const newLi2 = document.createElement('li');
newLi2.textContent = 'Item 5';
// ul.firstElementChild.nextElementSibling.append(newLi2);
// ul.firstElementChild.append(newLi2);
ul.firstElementChild.after(newLi2);
// ul.firstElementChild.nextElementSibling.before(newLi2);