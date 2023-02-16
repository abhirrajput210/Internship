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

let url = new URL('https://google.com/search');

url.searchParams.set('q', 'test me!'); 

console.log(url); 

url.searchParams.set('tbs', 'qdr:y'); 

// parameters are automatically encoded
console.log(url); 

// iterate over search parameters (decoded)
for(let [name, value] of url.searchParams) {
  console.log(`${name}=${value}`); // q=test me!, then tbs=qdr:y
}
