// Step 1 :- Install Package Nodemailer
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2f250453538c23",
    pass: "b94926a1eb45ff"
  }
});

message = {
    from: "from-example@email.com",
    to: "to-example@email.com",
    subject: "Subject",
    text: "Hello Abhishek Rajput Here"
}
transporter.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});
// var mailOptions={
//     from:'abhishekrajput.lamprostech@gmail.com',
//     to:'abhirrajput210@gmail.com',
//     subject:'Mail Sending Demo',
//     text:'Hello Abhishek Rajput Here'
// }

// transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//         console.log("Network Problem : ",error);
//     }
//     else{
//         console.log("Email Has Been Sent",info.response);
//     }
// })