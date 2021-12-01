// const user = {
//   name: 'Husan',
//   age: '16',
//   hobbiy: ['play game', 'read book'],
//   size: {
//     width: '60'
//   },
//   sayHello(a) {
//     return `Assalomu alaykum hurmatli ${a}`; 
//   }
// }

// console.log(user.size.width);

// // document.getElementById('');

// let a = user.sayHello('Husan');
// console.log(a);

// console.log(user['age']);

// user.age = 17;
// user.email = 'husan_dadajonov@gamil.com';

// delete user.name;

// user.location = 'Sirdaryo';
// // delete user.location;
// console.log(user);


// let anObject = { left: 1, right: 2 };
// delete anObject.right;
// console.log('right' in anObject);

// let a = Object.keys(user);

// for(let i = 0; i< a.length; i++) {
//   console.log(user[a[i]]);
// }
// console.log(a);
// let objA =  {
//   a: 1, 
//   b: 2
// }
// let objB =  {
//   b: 4,
//   c: 5
// }
// Object.assign(objA, objB);

// console.log(objA);

// let a = 5;
// let b = a;
// a = 10;
// console.log(a, b);

// let objA = { value: 10 };
// let objB = objA;
// objA.value = 20;
// objB.value = 25;
// console.log(objA, objB);


// let number = 1;

// function inside(number) {
//   number++;
//   console.log('inside ', number);
// }

// inside(number);
// console.log('outsite ', number);
// let obj = {value: 1};

// function inside(obj) {
//   obj.value++;
//   console.log('inside ', obj);
// }

// inside(obj);
// console.log('outsite ', obj);

// let obj1 = {message: 10};
// let obj3 = {message: 10};
// // let obj2 = obj1;
// console.log( obj1.message == obj3.message );

// const foodArray = [
//   { name: 'Pizza' },
//   { name: 'Burger' },
//   { name: 'hotdog' }
// ];

// let newArray = ['osh', 'somsa', 'lagmon', 'kabab'];
// let i = 0;
// for(let food of newArray) {
//   console.log(food + ' ' + i++ );
// }

// for(let food of foodArray) {
//   console.log(food.name);
// }

// for(let food in user) {
//   console.log(user[food]);
// }

// for(let food of foodArray) {
//   console.log(food);
// }

// for(let i = 0; i< foodArray.length; i++) {
//   console.log(`Food name: ${foodArray[i].name}` );
// }

// in for obj (array index)
// of for array

let form = document.getElementById('form');
let elFormInputName = document.querySelector(".form-fname");
let elFormInputSurname = document.querySelector(".form-surname");
let elFormInputAge = document.querySelector(".form-age");
let elFormInputPass = document.querySelector(".form-passpost");
let elFormInputDollar = document.querySelector(".form-dollar");

let elItemname = document.querySelector(".item-name b");
let elItemage = document.querySelector(".item-age b");
let elItempasspost = document.querySelector(".item-passpost b");
let elItemsom = document.querySelector(".item-som b");
let elItemdollar = document.querySelector(".item-dollar b");

let kurs = 10790;
document.querySelector("#dollarC").innerHTML = kurs +" som";
form.addEventListener('submit', function(e) {
  let user = {};
  e.preventDefault();
  user.name = elFormInputName.value;
  user.surname = elFormInputSurname.value;
  user.age = elFormInputAge.value;
  user.passpost= elFormInputPass.value;
  user.dollar = elFormInputDollar.value;

  elItemname.innerHTML = user.name + ' ' + user.surname;
  elItemage.innerHTML = user.age;
  elItempasspost.innerHTML = user.passpost;
  elItemsom.innerHTML = user.dollar * kurs + "sum";
  elItemdollar.innerHTML = user.dollar + "$";

  console.log(user);
});


// let text = "Nimadir string";
// text.length;
// text.charAt(2);
// text[1]; // X text[1] = 15;  
// text.endsWith('g');
// text.startsWith('dr');
// text.includes('f#@k');
// text.match(/yomon/gi); // regex /\D{1,2}\d{7}/g
// text.indexOf('o');
// text.lastIndexOf;
// text.toLocaleLowerCase;
// text.toUpperCase;
// text.trim();





