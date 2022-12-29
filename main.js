// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Hello';
// ul.firstElementChild.style.color = 'green';
// ul.children[1].style.color = 'yellow';
// const btn = document.querySelector('.btn');
        // btn.addEventListener('mouseover', (e)=>{
//     e.preventDefault();
//     console.log('MouseOver');
// });
        // btn.addEventListener('click', (e)=>{
        //     e.preventDefault();
        //     console.log('Clicked');
        // });
        // btn.addEventListener('mouseout', (e)=>{
        //     e.preventDefault();
        //     console.log('MouseOut');
        // });
        // const myForm = document.querySelector('#my-form');
        // const nameInput = document.querySelector('#name');
        // const emailInput = document.querySelector('#email');
        // const msg = document.querySelector('.msg');
        // const userList = document.querySelector('#users');
        // const btn = document.querySelector('.btn');
        
        // btn.addEventListener('click', onSubmit);
        
        // function onSubmit(e){
        //   e.preventDefault();
        //   if(nameInput.value === '' || emailInput.value === ''){
        //     msg.classList.add('error');
        //     msg.innerHTML = "Please enter all fields";
        //     setTimeout(() => msg.remove(), 3000);
        //   } else {
        //     const li = document.createElement('li');
        //     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        //     userList.appendChild(li);
        
        //     nameInput.value = '';
        //     emailInput.value = '';
        //   }
        // }
        // GETELEMENTSBYCLASSNAME
// let items = document.getElementsByClassName('item');
// items[2].style.backgroundColor = 'red';
// for(let i=0; i<items.length;i++){
//   items[i].getElementsByClasli.fontWeight = 'bold';
// }

// GETELEMENTBYTAGNAME
// let li = document.getElementsByClassName('li');
// li[2].style.backgroundColor = 'red';
// for(let i=0; i<li.length;i++){
//   li[i].getElementsByClassName.fontWeight = 'bold';
// }

// QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World!';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundcolor = 'green';
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// // QUERYSELECTORALL
// const items = document.querySelectorAll("#items li");
// items[1].style.color = "green";

// const oddElements = document.querySelectorAll("#items li:nth-child(odd)");
// for (const element of oddElements) {
//   element.style.backgroundColor = "green";
// }

// TRAVERSING DOM
var itemList = document.querySelector('#items');
// PARENT NODE
// console.log(itemList.parentNode);
// itemList.parentNode.style.background = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// PARENT ELEMENT
// console.log(itemList.parentElement);
// itemList.parentElement.style.background = 'blue';
// console.log(itemList.parentElement.parentElement.parentElement);

// Child Node
// console.log(itemList.childNodes);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'green';


// First Child
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

// Last Child
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);       
// itemList.lastElementChild.textContent = 'Hello 4'

// // nextSibling
// console.log(item.itemList.nextSibling);
// // nextElemetSibling
// console.log(itemList.nextElementSibling);
// // previousSibling
// console.log(item.itemList.previousSibling);
// // previousElemetSibling
// console.log(itemList.previousElementSibling);

// createElement
var newDiv = document.createElement('div');
// Add class and ID
newDiv.className = 'hello';
newDiv.id = 'hello1';

// setAttribute
newDiv.setAttribute('title', 'Hello div');

// create text node
var text = document.createTextNode('Hello World!');

// append or add text to div
newDiv.appendChild(text);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';

console.log(newDiv);
container.insertBefore(newDiv,h1);

// add list 
var listItem = document.getElementsByClassName("list-group-item")[0];
  var list = document.getElementById("items");

  // Create a new list item with the text "Hello"
  var newListItem = document.createElement("li");
  newListItem.innerHTML = "Hello";
  newListItem.classList.add("list-group-item");

  // Insert the new list item before "Item 1"
  list.insertBefore(newListItem, listItem);