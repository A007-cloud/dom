// //EXAMINE THE DOCUMENT OBJECT //

// // console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';


// // console.log(headerTitle.innerText);
// // console.log(headerTitle.textContent);
// // headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTBYCLASSNAME //
// var headerTitle = document.getElementsByClassName('title');
// console.log(headerTitle);
// headerTitle[0].style.fontWeight = 'bold';
// headerTitle[0].style.color = 'green';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';

// for(var i = 0; i < items.length; i++){
//   items[i].style.fontWeight = 'bold';
//   items[i].style.color = 'pink';
// }

// QUERYSELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type = submit]');
// submit.value = 'SEND';


// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'


// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'pink';