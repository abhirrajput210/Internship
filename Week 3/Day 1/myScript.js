// ---------- Popup Example ----------

// let params = `width=100,height = 100`;
// window.open('https://javascript.info/','Popup Example','params');

// ---------- Popup Example With Parameters -----------

// let params = window.open("about:blank","hello","width=200,height=100");
// params.document.write("Hello, World!");

// ----------- Accessing Windows From The popup -----------

// let params = open("about:blank","hello","width=200,height=100");
// // params.document.write("<script>window.opener.document.body.innerHTML = 'red'</script>");

// params.onload = function(){
//     params.close();
// };

// let newWindow = open('/', 'example', 'width=300,height=300');

// newWindow.onload = function() {
//   newWindow.close();
//   alert(newWindow.closed); // true
// };


// ---------- Moving And Resizing Window Methods ----------

// win.moveBy(x,y);
// win.moveTo(x,y);
// win.resizeBy(width,height);
// win.resizeTo(width,height);

// ---------- Scrolling A Window Methods -----------

// win.scrollBy(x,y);
// win.scrollTo(x,y);
// Element.scrollIntoView(top == true)

// ----------- Array Buffer Example ------------


let ab = new ArrayBuffer(16);
console.log(ab.byteLength);