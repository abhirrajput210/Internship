const mysql = require('mysql');
const bcrypt = require('bcrypt');
const express = require("express")
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine','ejs');

app.get('/todo',(req,res) =>{
    res.render("todo.ejs")
})

app.get('/',(req,res) =>{
    res.render("login.ejs")
})

app.get('/register',(req,res) =>{
    res.render("register.ejs")
})

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Abhi@0097',
  database: 'todo'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.post('/register', (req, res) => { 
  let fullname = req.body.fullname;
  let username = req.body.username;
  let email = req.body.email;
  let phonenumber = req.body.phonenumber;
  let pass = req.body.pass;
  let confirmpass = req.body.confirmpass;

  const salt = bcrypt.genSaltSync(10);
  const enpass= bcrypt.hashSync(pass, salt);
  db.query("INSERT INTO users(fullname, username, email, phonenumber, pass, confirmpass) value(?,?,?,?,?,?) ", [fullname,username,email,phonenumber,enpass,confirmpass], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.redirect('/');
  });
});


app.post('/login-check', (req, res) => {
  const { email, pass } = req.body;
  if (email && pass) {
    // Check if email exists in database
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        const user = results[0];
        console.log(user);
        // Compare password with hashed password stored in database
        bcrypt.compare(pass, user.pass, (err, result) => {
          if (err) throw err;
          if (result === true) {
            res.redirect('/todo');
          } else {
            res.send('Incorrect email or password');
          }
        });
      } else {
        res.send('Incorrect email or password');
      }
    });
  } else {
    res.send('Please enter email and password');
  }
});
  
app.post('/todo', (req, res) => {

  const { title, des ,dt, completed } = req.body;
  const user = { title, des ,dt, completed };
  db.query('INSERT INTO tasks SET ?', user, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  })
});
  
app.listen(3000)