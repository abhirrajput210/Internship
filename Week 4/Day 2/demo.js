// Step 1 :- Install Package Nodemailer

// qilnjmnedmndpyjk
var nodemailer = require('nodemailer');

      let transporter = nodemailer.createTransport({
        service:'gmail',     
        host: 'smtp.gmail.com',
        port: 465,
        secure:true,
             auth: {
                 user: "abhirrajput210@gmail.com",
                 pass: "qilnjmnedmndpyjk"
             }
     })

let mailOptions = {
      from: "abhirrajput210@gmail.com",
      to: "jaypatel.lamprostech@gmail.com",
      subject: "Subject",
      text: "Hello SMTP Email"
 }
 transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
})