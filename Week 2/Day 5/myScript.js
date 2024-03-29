// function* generatorSequence(){
//     yield 1;
//     yield 2;
//     yield 3;
//     // return 4;
//     yield 4;
// }

// let generator = generatorSequence();

// ---------- Generator Iteration Using Object.next() ----------
// let first = generator.next();
// console.log(JSON.stringify(first));

// let second = generator.next();
// console.log(JSON.stringify(second));

// let third = generator.next();
// console.log(JSON.stringify(third));

// let fourth = generator.next();
// console.log(JSON.stringify(fourth));

// let fifth = generator.next();
// console.log(JSON.stringify(fifth));

// ---------- Generator Iteration Using For Loop ----------

// for(let values of generator){
//     console.log(values);
// }


// ---------- Generator Iteration Using Spread Syntax -----------

// let sequence = [0,...generatorSequence()];
// console.log(sequence);


// ----------- Using Generator For Iterables -----------

// let range = {
//     from : 1,
//     to : 10,


// [Symbol.iterator](){
//     return {
//         current : this.from,
//         last : this.to,

//         next(){
//             if (this.current <= this.last){
//                 return{done : false, value : this.current++};
//             }
//             else{
//                 return{done :true};
//             }
//         }
//     };
// }
// };

// console.log([...range]);


// ----------- Shorthand Of Using Generators For Iterables ----------


// let range = {
//     from : 1,
//     to : 10,


// *[Symbol.iterator](){
//     for(let value=this.from; value <= this.to ; value++){
//         yield value;       
//     }    
// }

// };

// console.log([...range]);


// ----------- Generator Compositions ------------

// function* generatorSequence(start,end){
//     for(let value=start; value<=end; value++){
//         yield value;
//     }
// }


// function* generatePassCode(){
//     // 0..9
//     yield* generatorSequence(48,57);

//     //A..Z
//     yield* generatorSequence(65,90);

//     //a..z
//     yield* generatorSequence(97,122);
// }

// let str = '';
// for(let code of generatePassCode()){
//     str += String.fromCharCode(code);
// }

// console.log(str);


// ---------- Yield Is A Two-Way Street ----------

// function* generator(){
//     let add = yield "2+2=?";
//     console.log(add);

//     let mul = yield "2*2*2=?";
//     console.log(mul);
// }

// let gen  =  generator();
// console.log(gen.next().value);
// console.log(gen.next(4).value);
// console.log(gen.next(8).value);


// ------------ Generator Throw Method For Catching Errors -----------

// function* generator(){
//     try{
//         let add = yield "2 + 2 = ?";
//         console.log("Error Occurs");
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// let gen = generator();
// let ans = gen.next().value;
// gen.throw(new Error("Outside Message"));


// ------------ Generator Return Method For Stop the Generator ----------

// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let gen = generator();
// console.log(gen.next());
// console.log(gen.return("Completed"));
// console.log(gen.next());


// ------------- Recall Generator -----------

// let range = {
//     from : 1,
//     to : 10,
    
    
//     [Symbol.iterator](){
//         return {
//             current : this.from,
//             last : this.to,
    
//             next(){
//                 if (this.current <= this.last){
//                     return{done : false, value : this.current++};
//                 }
//                 else{
//                     return{done :true};
//                 }
//             }
//         };
//     }
// };

// for(let values of range){
//     console.log(values);
// }

// ---------- Async Iterables ----------


// let range = {
//     from : 1,
//     to : 10,
    
    
//     [Symbol.asyncIterator](){
//         return {
//             current : this.from,
//             last : this.to,
    
//             async next(){
//                 await new Promise(resolve => setTimeout(resolve,2000));
//                 if (this.current <= this.last){
//                     return{done : false, value : this.current++};
//                 }
//                 else{
//                     return{done :true};
//                 }
//             }
//         };
//     }
// };

// (async() => {
// for await (let values of range){
//     console.log(values);
// }
// })()


// ------------ Proxy And Reflect Example -----------

// let target = [];
// let proxy = new Proxy(target,{});

// proxy.test =5;
// console.log(proxy.test);
// console.log(target.test);

// for(let key in proxy){
//     console.log(key);
// }


// ---------- Proxy With Getter Methods ----------
// let numbers = [1,2,3];

// numbers = new Proxy(numbers,{
//     get(target,prop){
//         if(prop in target){
//             return target[prop];
//         }
//         else{
//             return 0;
//         }
//     }
// });

// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[10]);


// ---------- Proxy With Set Method --------------

// let numbers = [];

// numbers  = new Proxy(numbers,{
//     set(target,prop,val){
//         if(typeof val == 'number'){
//             target[prop] = val;
//             return true;
//         }else{
//             return false;
//         }
//     }
// });

// console.log(numbers.push(10));
// console.log(numbers.push(20));
// // numbers.push("Test");

// ----------- OwnKeys And GetOwnPropertyDescriptor ----------

// let user = {
//     name : "Abhishek",
//     age : 20,
// };

// let userOne = new Proxy(user,{
//     ownKeys(target){
//         return Object.keys(target);
//     }
// });

// for(let keys in userOne){
//     console.log(keys);
// }

// console.log(Object.keys(userOne));
// console.log(Object.values(userOne));


// let user = {};

// let userOne = new Proxy(user,{
//     ownKeys(target){
//         return ['a','b','c'];
//     },

//     getOwnPropertyDescriptor(target,prop){
//         return{
//             enumerable : true,
//             configurable :true
//         };
//     }
// });

// for(let keys in userOne){
//     console.log(keys);
// }

// console.log(Object.keys(userOne));
// console.log(Object.values(userOne));


// ---------- Range With Hash Trap ----------

// let numbers = {
//     start : 1,
//     end : 10
// };

// let range =  new Proxy(numbers,{
//     has(target,prop){
//         return prop >= target.start && prop <= target.end;
//     }
// });

// console.log(5 in range);
// console.log(8 in range);
// console.log(50 in range);


// ---------- Reflect Object ----------

// let user = {
//     name : "Abhishek",
//     age : 20,
// };

// console.log(Reflect.ownKeys(user));
// console.log(Reflect.get(user,'name'));
// console.log(Reflect.set(user,'name',"Abhi"));;
// console.log(Reflect.get(user,'name'));
// console.log(Reflect.has(user,'name'));
// console.log(Reflect.deleteProperty(user,"name"));
// console.log(Reflect.has(user,'name'));

// ---------- eval Example ----------

// let ans = 'console.log("Abhishek")';
// eval(ans);


//---------- Currying Example ----------

function sum(x){
    return (y) =>{
        return (z) =>{
            return x + y + z; 
        }
    }
}

console.log(sum(1)(2)(3));