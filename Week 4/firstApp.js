// ---------- Display The Simple Message Using Function ----------

// function showName(name){
//     console.log('Hello'+name);
// }


// ---------- Call The Function ----------

// showName('Abhishek');


// ---------- Variable Defined Is Not Available In Global Scope ----------

// var message = '';
// console.log(global.message);
// console.log(module);


// ---------- Loading The Module Using Require Function ----------
// ---------- Always Use The Constant Data Type When Loading The MOdule As We Don't change The Value Of Constant Which Is Used For Loading The Value  

// const logger = require('./logger');
// console.log(logger);


// ---------- When Changing The Value Of The Constant It Will Generate An Error ----------
// logger = 1;


// ---------- Call The NAother Module Method And Pass The Parameters ----------

// logger.log('Abhishek');


// ---------- Use The jshint FileName.js To Get The Proper Error Description ----------


// ---------- Module Wrapper Functions ----------
// ---------- When We Execute The Node Program It First Wrap The Entire Program Into Module And Then Execute It ----------


// ---------- FileName DirectoryName ----------

// console.log(__filename);
// console.log(__dirname);


// ---------- Path Module ----------

// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);


// ---------- Lod OS Module To Get The Value Of Operating System ----------

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory : ${totalMemory}`);
// console.log(`Free Memory : ${freeMemory}`);


// ---------- Load FS Module To Access The Methods Of The FS Module ----------
// ---------- To Read The File Path And Directory Name Using Asynchronous Method ----------

// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);


// ---------- To Read The File Path And Directory Name Using Asynchronous Method ----------
// fs.readdir('./',function(err,files){
//     if(err) console.log(`Error : ${err}`);
//     else console.log(`Result : ${files}`);
// })


// ---------- Using The Event Module ----------

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Register A Listener
// emitter.on('messageLogged',function(){
//     console.log('Listener Called');
// });

// // Raise An Event
// emitter.emit('MessageLogged');



// ---------- Using The Event Module With Event Argument ----------

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Register A Listener
// emitter.on('messageLogged',function(arg){
//     console.log('Listener Called',arg);
// });

// // Raise An Event
// emitter.emit('MessageLogged',{id:1,msg:'Hello Good Evening'});


// ---------- HTTP Module Example ----------

const http = require('http');

const server = http.createServer();

server.on('connection', (socket) =>{
    console.log('New Connection...');
});

server.listen(3000);

console.log('Listening On Port 3000....');