
// appendChild
// const ele = document.createElement('h1');
// const node = document.createTextNode('Hello I am Honey');
// ele.appendChild(node);

// const container = document.getElementById('container');
// container.appendChild(ele);

// insertBefore
// const ele =  document.createElement('h1');
// const node = document.createTextNode('Hi im available...');
// ele.appendChild(node);

// const container = document.getElementById('container');
// const firstChild = document.getElementById('p1');
// container.insertBefore(ele,firstChild);

// Removing Existing HTML Elements with remove
// const ele = document.getElementById('p1').remove();

// Removing Existing HTML Elements with removeChild
// const parent = document.getElementById('container');
// const child = document.getElementById('p1');
// parent.removeChild(child);
// child.parentNode.removeChild(child);

// HTMLCollection objects
// const myCollection = document.getElementsByTagName('p');
// console.log(myCollection.length);
// for(let i = 0; i<myCollection.length;i++){
//     myCollection[i].style.color="red";
// }

// DOM NodeList Object

// const myNodeList = document.querySelectorAll('p');
// alert(myNodeList[0].nodeName);

window.onload = function() {

    // create a couple of elements in an otherwise empty HTML page
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("Big Head!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
 }

