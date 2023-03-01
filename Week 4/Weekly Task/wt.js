const fs = require('fs');
const axios = require('axios');
const nodemailer = require('nodemailer');
const http = require('http');
var require = require('email-templates').EmailTemplate

// Read email addresses from file
const emails = fs.readFileSync('interns.txt').toString().split('\n');

// Define API endpoint for news or jokes
const apiUrl = 'https://inshortsapi.vercel.app/news?category=sports';

// Retrieve news from API
axios.get(apiUrl)
  .then(response => {
    const data = response.data;
    console.log(data);
    let content = ` 
    <html>
    <head>

    <style>
      body{
        font-size: 1.25rem;
        background-color: hsl(212, 45%, 89%);
        margin: 50px;
      }
  
      .styled-table {
        border: 1px solid black;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      }
  
      .styled-table td{
        border: 1px solid black;    
      }
  
      .styled-table th{
        border: 1px solid black;    
      }
  
      .styled-table thead tr {
        background-color: #009879;
        color: black  ;
        text-align: left;
      }
    
    </style>
    
    </head>
    <body>
    
      <div class="container">
        <div class="table-responsive">
            <table id="myTable" class="table styled-table">
                <thead>
                    <tr>                
                        <th><center><b>Author</b></center></th>
                        <th><center><b>Content</b></center></th>
                        <th><center><b>Date</b></center></th>
                        <th><center><b>Image</b></center></th>
                        <th><center><b>Title</b></center></th>
                    </tr>
                </thead>
                <tbody id="userData">`
                    
                data.data.map((values) =>{
                  content += `<tr>
                  <td>${values.author}</td>
                  <td>${values.content}</td>
                  <td>${values.date}</td>
                  <td><img width="50" height="50" src="${values.imageUrl}"/></td>
                  <td>${values.title}</td>
              </tr>` 
              });

              content += `</tbody>
            </table>
        </div>
      </div>
    </body>
  </html>`

  const message = {
    from: 'abhirrajput210@gmail.com', // replace with your email address
    to: emails.join(', '), // send email to all interns
    subject: 'Sports News', 
    html : content
  }
  
  // Define transporter for sending email

  let transporter = nodemailer.createTransport({
    service:'gmail',     
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
      user: "abhirrajput210@gmail.com",
      pass: "qilnjmnedmndpyjk"
    }
  });
  
  // Send email
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  })
  .catch(error => {
    console.log(error);
});

  

