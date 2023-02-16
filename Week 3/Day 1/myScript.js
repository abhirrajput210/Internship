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

// let ab = new ArrayBuffer(16);
// console.log(ab.byteLength);

// ------------ Array Buffer Using View Object -------------


// let ab = new ArrayBuffer(16);

// let view  = new Uint32Array(ab);

// let view2  = new Uint8Array(ab);

// let view3 = new Uint32Array(ab);

// console.log(view.BYTES_PER_ELEMENT);

// console.log(view2.BYTES_PER_ELEMENT);

// console.log(view3.BYTES_PER_ELEMENT);

// console.log(view.length);

// console.log(view.byteLength);

// view[0] = 1234;

// for(let num of view){
//     console.log(num);
// }


// ----------- Text Decoder Example ----------

// let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

// console.log( new TextDecoder().decode(uint8Array) );

// ------------ Text Encoder Example ------------

// let encoder = new TextEncoder();

// let uint8Array = encoder.encode("Hello");
// console.log(uint8Array);


// ---------- Blob Example ----------

let img = document.querySelector('img');

// make <canvas> of the same size
let canvas = document.createElement('canvas');
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let context = canvas.getContext('2d');

// copy image to it (this method allows to cut image)
context.drawImage(img, 0, 0);
// we can context.rotate(), and do many other things on canvas

// toBlob is async operation, callback is called when done
canvas.toBlob(function(blob) {
  // blob ready, download it
  let link = document.createElement('a');
  link.download = 'example.png';

  link.href = URL.createObjectURL(blob);
  link.click();

  // delete the internal blob reference, to let the browser clear memory from it
  URL.revokeObjectURL(link.href);
}, 'image/png');