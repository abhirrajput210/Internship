// let user = new Object();
// // let user = {};
// user ={
//     name : "Abhishek",
//     age : 20,
//     "birth date": 5,
// };
// alert(user.name);
// // delete user.age;
// alert(user.age);
// alert(user["birth date"]);

// let user  = new Object();
// user = {
//     name : "Abhishek",
//     age : 20,
// };

// // let birthdate = prompt("Enter Birth Date","age");
// // alert(user[birthdate]);


// let birthdate = "age"
// alert(user.birthdate);

// let fruit = prompt("Enter Fruit Name :","mango");
// let bag = {
//     [fruit] : 5,
// };
// alert(bag.mango);

// let obj = {
//     0: "Best",
// };
// alert(obj[0]);
// alert(obj["0"]);

// let obj = {};
// obj._proto_ =5;
// alert(obj._proto_);

// let obj = {name : "Abhi",Age : 30};
// alert("Age" in obj);
// alert("abc" in obj);

// let user = {
//     name : "Abhi",
//     age : 30,
//     isAdmin : true,
// };
//  for (let key in user){
//     alert(key);
//     // alert(user[key]);
//  }

// let user = {
//     "10" : "Abhi",
//     "1" : 30,
//     "8" : true,
// };
//  for (let key in user){
//     alert(key);
//     // alert(user[key]);
//  }


// let user = {name : "Abhi"};
// let admin = user;
// admin.name = "Abhishek";
// alert(user.name);


// let a = {};
// let b = a ;
// alert(a==b);

// let obj = {
//     name : "Abhi",
// };

// obj.name = "Abhishek";
// alert(obj.name);

// let clone = {};
// for(key in obj){
//     clone[key] = obj[key];
// }
// clone.name = "Abhishek";
// alert(obj.name);


// let obj = {
//     name : "Abhi",
//     size:{
//         width : 20,
//         height :40,
//     } 
// };

// let clone = Object.assign({},obj);
// obj.size.width = 80;
// alert(clone.size.width);


// let obj = {
//     name : "Abhi",
//     size:{
//         width : 20,
//         height :40,
//     } 
// };

// let clone = structuredClone(obj);
// obj.size.width = 80;
// alert(clone.size.width);

// let user  = {
//     name: "Abhi",
//     age : 20,  
// };

// user.sayHello = function(){
//     alert("Hello Good Evening !");
// }
// user.sayHello();


// let user  = {
//     name: "Abhi",
//     age : 20,  
//     sayHello(){
//         alert("Hello Good Evening !");
//     }
// };
// user.sayHello();


// let user  = {
//     name: "Abhi",
//     age : 20,  
//     sayHello(){
//         alert(this.name);
//     }
// };
// user.sayHello();

// let user = {name : "Abhi"};
// let admin = {name : "Abhishek"};

// function sayHello(){
//     alert(this.name);
// }

// user.u = sayHello;
// admin.u = sayHello;

// user.u();
// admin.u();

// admin['u']();

// function User(name){
//     this.name = name;   
//     this.isAdmin = false;
// }

// let user = new User("Abhi");
// let user1 = new User("Abhishek")

// alert(user.name);
// alert(user1.name);

function User(){
    this.name = "Abhi";
    return{name : "Abhishek"};
}
alert(User().name);
