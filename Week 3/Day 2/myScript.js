// ----------- How To Create New URL Using Path And Bash -----------

// let url1 = new URL('https://javascript.info/profile/admin');
// let url2 = new URL('/profile/admin', 'https://javascript.info');

// console.log(url1); 
// console.log(url2);



// ----------- Create New URL From The Existing URL Path -----------

// let url = new URL('https://javascript.info/profile/admin');
// let newUrl = new URL('tester', url);

// console.log(newUrl);


// ---------- Access URL Components ---------- 

// let url = new URL('https://javascript.info/url');

// console.log("Protocol : "+url.protocol); // https:
// console.log("Host : "+url.host);     // javascript.info
// console.log("Path Name : "+url.pathname);


// ---------- searchParams Example ----------

// let url = new URL('https://google.com/search');

// url.searchParams.set('q', 'test me!'); 

// console.log(url); 

// url.searchParams.set('tbs', 'qdr:y'); 

// parameters are automatically encoded
// console.log(url); 

// iterate over search parameters (decoded)
// for(let [name, value] of url.searchParams) {
//   console.log(`${name}=${value}`); // q=test me!, then tbs=qdr:y
// }



// ---------- Websocket Example ----------

// let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

// socket.onopen = function(event){
//   console.log("Connection Was Established");
//   console.log("Sending Message To The Server");
//   socket.send("My Name Is Abhishek");
// };

// socket.onmessage = function(event){
//   console.log(`Data Recieved From Server : ${event.data}`);
// };

// socket.onclose = function(event){
//   if(event.wasClean){
//     console.log(`Connection Closed Successfully code : ${event.code} reason : ${event.reason}`);
//   }
//   else{
//     console.log(`Connection Died`);
//   }

//   socket.onerror = function(event){
//     console.log(`[error]`);
//   }
// }



// ---------- Rate Limiting Example ----------

// every 100ms examine the socket and send more data
// only if all the existing data was sent out

// setInterval(() => {
//   if (socket.bufferedAmount == 0) {
//     socket.send(moreData());
//   }
// }, 100);



// ---------- EventSource Example ----------

// let es = new EventSource("/events/subscribe");

// es.onmessage = function(event){
//   console.log("Message : ",event.data);
// };



// ---------- Cookie Example ----------
// Specifies That The Browser Contain Any Cookie From The Current Sides

// console.log(document.cookie);

// Writing To Document.Cookie Example

// document.cookie = "user=abhi";
// console.log(document.cookie);

// Set Cookie Value With The Use Of Encoding

// let name = "my name";
// let value = "abc";

// document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

// For Decoding Cookie Values

// decodeURIComponent(name) + '=' + decodeURIComponent(value);

// Encode And Decode are used to encoding and decoding special character
// console.log(document.cookie);



// ---------- Local Storage Example ----------

let key = prompt("Enter The Key You Want To Add");
let value = prompt("Enter The Value You Want To Add");

localStorage.setItem(key,value);

console.log(`The Value  at ${key} is ${localStorage.setItem(key)}`);

if(key == 'name'){
  localStorage.removeItem(key)
}