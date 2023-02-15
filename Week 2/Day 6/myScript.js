// document.body.style.background = 'red';
// setTimeout(() => document.body.style.background = '',3000);


// ---------- Parent,Child,Sibling Nodes ----------

// console.log(document.body.parentElement == document.documentElement);
// console.log(document.head.nextSibling);
// console.log(document.body.previousSibling);

// ---------- DOM Property ----------

// document.body.myData = {
//     name : 'Abhishek',
//     Age : 20
// };

// console.log(document.body.myData.Age);


// ---------- DOM Property Methods ----------

// document.body.myName = function(){
//     console.log("Abhishek");
// }

// document.body.myName();

// ---------- Event Delegations ------------

document.getElementById("grandparent").addEventListener('click', (event) =>{
        console.log("GrandParent Clicked");
        console.log(event);
},false)


// document.getElementById("parent").addEventListener('click', () =>{
//     console.log("Parent Clicked");
// },false)


// document.getElementById("child").addEventListener('click', () =>{
//     console.log("Child Clicked");
// },false)