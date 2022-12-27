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
let items = document.getElementsByClassName('item');
items[2].style.backgroundColor = 'red';
for(let i=0; i<items.length;i++){
  items[i].getElementsByClassName.fontWeight = 'bold';
}
        
