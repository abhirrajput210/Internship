const express = require('express');
// const cookieParser = require("cookie-parser");
// const sessions = require('express-session');
// const http = require('http');
// var parseUrl = require('body-parser');
const app = express();

var mysql = require('mysql');

// let encodeUrl = parseUrl.urlencoded({ extended: false });

//session middleware
// app.use(sessions({
//     secret: "thisismysecrctekey",
//     saveUninitialized:true,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
//     resave: false
// }));

// app.use(cookieParser());

var con = mysql.createConnection({
    host: "localhost",
    user: "root", // my username
    password: "Abhi@0097", // my password
    database: "todo"
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})

app.post('/register', (req, res) => {
    var fullname = req.body.fullName;
    var username = req.body.userName;
    var email = req.body.email;
    var phonenumber = req.body.phoneNumber;
    var password = req.body.password;
    var confirmpassword = req.body.confirmPassword;

    con.connect(function(err) {
        if (err){
            console.log(err);
        };
        // checking user already registered or no
        con.query(`SELECT * FROM users WHERE username = '${userName}' AND password  = '${password}'`, function(err, result){
            if(err){
                console.log(err);
            };
            if(Object.keys(result).length > 0){
                console.log("User Already Exists");;
            }   // inserting new user data
                var sql = `INSERT INTO users (fullname, username, email, phonenumber, pass, confirmpass) VALUES ('${fullname}', '${username}', '${email}', '${phonenumber}', '${password}', '${confirmpassword}')`;
                con.query(sql, function (err, result) {
                    if (err){
                        console.log(err);
                    }else{
                        // using userPage function for creating user page
                       console.log("data inserted");
                    };
                });

        });
    });
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});