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

function* generatorSequence(start,end){
    for(let value=start; value<=end; value++){
        yield value;
    }
}


function* generatePassCode(){
    // 0..9
    yield* generatorSequence(48,57);

    //A..Z
    yield* generatorSequence(65,90);

    //a..z
    yield* generatorSequence(97,122);
}

let str = '';
for(let code of generatePassCode()){
    str += String.fromCharCode(code);
}

console.log(str);