// class User{
//     constructor(name){
//         this.name = name;
//     }
//     showMessage(){
//         alert(this.name);
//     }
// }

// let user = new User("Abhi");
// // user.showMessage();


// class Vehicle{
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed = speed;
//         alert(`Vehicle speed is ${this.speed}`);
//     }
//     stop(){
//         alert("Vehicle Stoped");
//     }
// }

// let bike = new Vehicle("Shine");

// class Bike extends Vehicle{
//     miledge(){
//         alert('Bikes Gives Good Miledge');
//     }

//     stop(){
//         super.stop();
//         alert("Bike Stoped");
//     }
// }

// let shine = new Bike("shine");
// shine.run(100);
// shine.stop();

// class Animal {

//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//   }
  
//   class Rabbit extends Animal {
  
//     constructor(name, earLength) {
//       super(name);
//       this.earLength = earLength;
//     }
//   }
  
//   // now fine
//   let rabbit = new Rabbit("White Rabbit", 10);
//   alert(rabbit.name); 
//   alert(rabbit.earLength); 

// let data = 1;
// alert(data);
// data = 2;
// setTimeout(()=>{
//     alert(`Timer : ${data}`);
// },2000)

// data = 3;
// alert(data);

// let data  = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve("Code Done")
//     })
// })

// // alert(data);
// data.then((item) =>{
//     alert(item);
// })


// let data  = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve("Code Done")
//     },2000)
// })

// // alert(data);
// data.then((item) =>{
//     alert(item);
// })

// alert("Hello ");


// let data  = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         reject("Error Occured")
//     },2000)
// })

// // alert(data);
// data.then((item) =>{
//     alert(item);
// })

// alert("Hello ");


// let data  = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         reject("Error Occured")
//     },2000)
// })

// // alert(data);
// data.then((item) =>{
//     alert(item);
// }).catch((err) =>{
//     alert(`Catch Block ${err}`)
// })

// let data = fetch("http://dummy.restapiexample.com/api/v1/employees");
// alert(data);


// let data = fetch("https://dummy.restapiexample.com/api/v1/employees");
// data.then((item) =>{
//     return  item.json()
// }).then((result) =>{
//     console.warn("2nd Output",result)
// })

// alert("Hello ");

// let data  = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve(10)
//     },2000)
// })
// data.then((item) =>{
//     console.warn("First",item)
//     return item * 10;
// }).then((item) =>{
//     console.warn("Second",item)
// })


// let data  = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve(10)
//     },2000)
// })
// data.finally((item) =>{
//     console.warn("Finally Block",item)
// })
// data.then((item) =>{
//     console.warn("First",item)
//     return item * 10;
// }).then((item) =>{
//     console.warn("Second",item)
// })


// let data  = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         reject(10)
//     },2000)
// })
// data.finally((item) =>{
//     console.warn("Finally Block",item)
// }).catch((err) =>{
//     console.warn("Catch Block",err)
// })


// let data = Promise.all([
//     new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("2 Seconds")
//         },2000)
//     }),
//     new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("1 Seconds")
//         },1000)
//     }),
//     new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("5 Seconds")
//         },5000)
//     })
// ])
// data.then((item) =>{
//     console.warn("Then Block",item)
// }).catch((err) =>{
//     console.warn("Catch block",err)
// })




// let data = Promise.all([
//     new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("2 Seconds")
//         },2000)
//     }),
//     new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             reject("1 Seconds")
//         },1000)
//     }),
//     new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("5 Seconds")
//         },5000)
//     })
// ])
// data.then((item) =>{
//     console.warn("Then Block",item)
// }).catch((err) =>{
//     console.warn("Catch block",err)
// })




// let data = Promise.allSettled([
//     new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("2 Seconds")
//         },2000)
//     }),
//     new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             reject("1 Seconds")
//         },1000)
//     }),
//     new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("5 Seconds")
//         },5000)
//     })
// ])
// data.then((item) =>{
//     console.warn("Then Block",item)
// }).catch((err) =>{
//     console.warn("Catch block",err)
// })



async function f(){
let data = Promise.race([
    new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("2 Seconds")
        },2000)
    }),
    new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("1 Seconds")
        },1000)
    }),
    new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("5 Seconds")
        },5000)
    })
])
data.then((item) =>{
    console.warn("Then Block",item)
}).catch((err) =>{
    console.warn("Catch block",err)
})

let result =  await data;
alert(result);
}

f();