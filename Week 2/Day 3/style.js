// function pow(x,n){
//     let j =1;
//     for(let i=0;i<n;i++){
//         j *= x;
//     }
//     return j;
// }
// alert(pow(2,3));

// function pow(x,n){
//     if(n==1){
//         return x;
//     }
//     else{
//         return (x * pow(x,n-1));
//     }
// }
// alert(pow(2,3));

// function showName(firstName, secondName, ...titles){
//     alert(firstName+' '+secondName);
//     alert(titles[0]);
//     alert(titles[1]);
//     alert(titles.length);
// }
// showName("ABC","DEF","GHI","JKL");

// function sum(...nums){
//     let sum = 0;
//     for(let arg of nums) sum += arg
//     return sum;
// }
// alert(sum(1));
// alert(sum(1,2));
// alert(sum(1,2,3));

// let arr = [3,5,9];
// let arr1 = [3,8,40];
// // alert(Math.max(arr));
// alert(Math.max(...arr));
// alert(Math.max(...arr,...arr1));
// alert(Math.max(1,30,...arr,...arr1,200));
// let merge = [0,1,...arr,...arr1,10];
// alert(merge);

// let msg = "Abhishek";
// alert([...msg]);

// let arr = [1,2,3];
// let arr1 = [...arr];
// alert([...arr1]);

// let arr = [1,2,3];
// let arr1 = [...arr];
// alert([...arr1]);
// arr.push(4);
// alert([...arr]);
// alert([...arr1]);

// let obj = {a: 1, b: 2, c: 3};
// let obj1 = {...obj};
// alert(JSON.stringify(obj));
// alert(JSON.stringify(obj1));
// obj.d = 4;
// alert(JSON.stringify(obj));
// alert(JSON.stringify(obj1));

// function name(){
//     let msg = "Abhi";
//     alert(msg); 
// }
// // alert(name);
// name();

// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );
// }
// sayHiBye("Abhishek","Rajput");


// function counterExample(){
//     let counter = 0;
//     return function(){
//         return counter++;
//     };
// }
// let counter = counterExample();
// alert(counter());
// alert(counter());
// alert(counter());

// if(!window.Promise){
//     alert("Your Browser Is Two Old");
// }

// function showName(){
//     alert("Abhishek");
// }
// alert(showName.name);

// function f1(a,b) {}
// function f2(a,b,c) {}
// function f3(a,b,c,d, ...more) {}

// alert(f1.length);
// alert(f2.length);
// alert(f3.length);


// function sayHello() {
//     counter++;
// }
// let counter = 0;

// sayHello();
// sayHello();
// sayHello();
// sayHello();

// alert(`Counter : ${counter}`);


// let sayHi = function(who){
//     alert(`Hello ${who}`);
// }

// sayHi("Abhi");

// let sayHi = function(who) {
//     if (who) {
//       alert(`Hello, ${who}`);
//     } else {
//       fun("Guest"); // Error: sayHi is not a function
//     }
//   };
  
//   let welcome = sayHi;
//   sayHi = null;

//   welcome();

// let sum = new Function('a','b','return a+b');
// alert(sum(2,3));

// let sayHello = new Function(alert('Hello World'));
// sayHello();

// function showIntro(name,surname){
//     alert(name +" "+ surname);
// }
// setTimeout(showIntro,1000,"Abhishek","Rajput");

// let to = setTimeout("alert('Hello'   )",1000);
// alert(to);

// clearTimeout(to);
// alert(to);

// setInterval(() => {
//     alert("Hello World");
// }, 1000);

// let i = 1;
// setTimeout(function run(){
//     func(i++);
//     setTimeout(run,1000);
// },1000);

// let i = 1;
// setInterval(function() {
//   func(i++);
// }, 100);

// setTimeout(() => alert("Hello"));
// alert("Hii");

// let obj = {num:2};

// let addToThis = function(a,b,c){
//     return this.num + a + b + c;
// };

// alert(addToThis());
// alert(addToThis.call(obj,5,2,2));
// alert(result);


// let obj = {num:2};

// let addToThis = function(a,b,c){
//     return this.num + a + b + c;
// };

// var arr = [5,2,2];
// alert(addToThis.apply(obj,arr));

// let obj = {num : 2};

// let addToThis = function(a,b,c){
//     return this.num + a + b + c;
// };
// // var arr = [5,2,2];
// var bound = addToThis.bind(obj);

// alert(bound(5,2,2));

// let user = {
//     name : "Abhi"
// }

// Object.defineProperty(user,'name',{
//     value : "Abhishek",
//     enumerable : true,
//     // writable : false,
//     writable : true,
//     configurable : false,
// })

// user.name = "ABC";
// // alert(user.name);

// for(let key in user) alert(key);

// const showName = {
//     firstName : "Abhishek",
//     lastName : "Rajput",
//     get FullName(){
//         return `${showName.firstName} ${showName.lastName}`;
//     },
//     set FullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// showName.FullName = "Abhi Rajput";
// alert(showName.FullName);


// let dog = {
//     tail : true,
//     walk(){
//         alert("Walk");
//     }
// };

// let cat = {
//     bark : false
// };

// cat.__proto__ = dog;
// cat.walk();

// alert(cat.bark);
// alert(cat.tail);

// let dog = {
//     tail : true,
//     walk(){
//         alert("Walk");
//     }
// };n

// let cat = {
//     bark : false,
//     __proto__ : dog,
// };


// alert(Object.keys(cat));
// for(let props in cat) alert(props);

let dessert = {
    sweetness : "light"
};

function Cake(color){
    this.color = color;
}

Cake.prototype = dessert;

let strawberryCake = new Cake("Pink");
alert(strawberryCake.sweetness);
alert(strawberryCake.color);