// alert('Hello')
// alert('World')


// let name='Abhishek' , age="20", name1;
// name1 = name;
// alert(name1+' '+age);

// const name='Abhishek';
// name = 'Rajput';
// alert(name);    

// let admin,name;
// name = 'John';
// admin = name;
// alert(admin);

let name="Abhishek";
let surname = 'Rajput';
// alert(`Hello,${name},${surname}`);
// alert(`Sum Of 3 And 4 Is,${3+4}`);
let type = typeof name;
// alert(`${type}`);
// let age = prompt("How Old Are You?"," ");
// alert(`You Are ${age} Years Old`);
// let isBoss = confirm("Are You Boss?");
// // alert(isBoss);
// let value = true;
// alert(typeof value);
// value = String(value);
// alert(typeof value);
// alert(2+3);
// alert(4%3);
// // alert(5**2);
// alert(1+2+'2');
// alert('1'+2+2);
// let x = 1,y=-2;
// alert(+x);
// alert(+y);
// // alert(+true);
// let apples = "2";
// let oranges = "3";
// alert( apples + oranges );
// alert( +apples + +oranges );
// let x = 2*2+1;
// // alert(x);
// a=b=c=2+2;
// alert(a+" "+b+" "+c);
// let n = 2;
// n += 5;
// n *= 2;
// // alert(n);
// alert(`2 > 1 : ${2>1}`);
// alert(`2 < 1 : ${2<1}`);
// alert(`2 >= 1 : ${2>=1}`);
// alert(`2 <= 2 : ${2<=2}`);
// alert(`2 != 1 : ${2!=1}`);
// alert("abhi" > "Abhi");
// alert("Abhi" > "abhi");
// alert("abhi" > "abc");
// alert('2' > 1);
// alert(10<'20');
// alert(false == 0);
// // alert(false === 0);
// let year = prompt("Enter The Current Year : "," ");
// if(year == 2023) alert("You Are Right");
// // else alert("You Are Wrong");
// if(0){
//     alert("0 Block Get Executed");
// }

// if(1){
//     alert("1 Block Get Executed");
// }

// let year = prompt('Enter The Current Year', '');

// if (year < 2023) {
//   alert( 'Too early...' );
// } else if (year > 2023) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }

// let year = prompt("Enter Current Year");
// let result = (year==2023)?true:false;
// alert(result);


// let year = prompt("Enter Current Year");
// let result = (year>2023)?'To Late':
//              (year<2023)?'To Early':
//              (year==2023)?'Exactly!':'False Number';
// alert(result);

// let hour = prompt("Enter The Hour :",' ');
// if(hour<8 || hour>20){
//     alert("Closing Hours")
// }
// else{
//     alert("Opening Hiurs");
// }

// alert(undefined || null || 0);
// alert(undefined && null && 0);

// let num = 0;
// alert(num ?? 'Hello');


// let num1;
// alert(num1 ?? 'Hello');

// let i=1;
// while(i<=10){
//     alert(i);
//     i++;
// }

// let i=3;
// do{
//     alert(i);
//     i--;
// }while(i<3);

// for(let i=1;i<=5;i++){
//     alert(i);
// }

// for(let i=1;i<=10;i++){
//     if(i==5){
//         break;
//     }
//     alert(i);
// }

// for(let i=1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     alert(i);
// }

// outer:for(let i=0;i<=2;i++){
//     for(let j=0;j<=2;j++){
//         let input = prompt(`Enter the X and Y COrdinate (${i},${j})`,'');
//         if(!input) break outer;
//     }
// }
// alert('Done');

// let a =2+2;
// switch(a){
//     case 3:
//         alert('To Small');
//         break;
    
//     case 4:
//         alert('Exactly');
//         break;

//     case 5:
//         alert('To Big');
//         break;

//     default:
//         alert('Wrong Choice');

// }   


// function showMessage(){
//     alert("Hello Good Evening !");
// }

// showMessage();

// function showMessage(){
//     let msg = "Hello";
//     alert(msg);
// }
// showMessage();
// alert(msg);

// let username = "Abhishek";
// function showMessage(){
//     alert(username);
//     let msg = 'Hello' + username;
//     alert(msg);
// }
// showMessage();

// let msg = "Hello";
// function showMessage(){
//     let msg = "Hii"
//     alert(msg);
// }
// showMessage();
// alert(msg);

// function showMessage(name,surname){
//     alert(name + ' ' + surname);
// }
// showMessage('Abhishek','Rajput');

// function showMessage(name,surname="No Text"){
//      alert(name + ' ' + surname);
//  }
//  showMessage('Abhishek',undefined);

// function sum(a,b){
//     return a+b;
// }
// let result = sum(2,3);
// alert(result);

// function checkAge(age){
//     if(age>=18){
//         return true;
//     }
//     else{
//         return confirm("Do you have permission from your parents");
//     }
// }

// let age = prompt("Enter Your Age");
// if(checkAge(age)){
//     alert("Allowed");
// }
// else{
//     alert("Not Allowed");
// }

// function sayHi(){
//     alert("Hello");
// }
// let msg = sayHi;
// msg();
// sayHi();

// let sum = (a,b) => a+b;
// alert(sum(2,3));

// let sayHi = () => alert("Hello!");

// sayHi();

let sum = (a,b) => {
    let result = a+b;
    return result;
}
alert(sum(2,3));