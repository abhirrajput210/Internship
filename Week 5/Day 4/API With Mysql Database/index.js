var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abhi@0097',
    database: 'test'
});

// connect to database
dbConn.connect(); 

// Retrieve all users 
app.get('/users', function (req, res) {
    dbConn.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});

// Retrieve user with id 
app.get('/user/:id', function (req, res) {
    let user_id = req.params.id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }

    dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'users list.' });
    });
});

// Add a new user  

app.post('/user', function (req, res) {
  
    let name = req.body.name;
    let email = req.body.email;
    let created_at = req.body.created_at;
    if (!name && !email && !created_at) {
        return res.status(400).send({ error:true, message: 'Please provide Information to be add' });
    }
  
    dbConn.query("INSERT INTO users(name, email, created_at) value(?,?,?) ", [name,email,created_at], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Record has been added' });
    });
});


//  Update user with id
app.put('/update', function (req, res) {
  
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let created_at = req.body.created_at;
    if (!id || !name || !email || !created_at) {
        return res.status(400).send({ error: user, message: 'Please provide full information with id' });
    }
  
    dbConn.query("UPDATE users SET name = ?, email= ?, created_at= ? WHERE id = ?", [name, email, created_at, id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'data updated' });
    });
});

//  Delete user
app.delete('/deleteuser', function (req, res) {
  
    let id = req.body.id;
  
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }
    dbConn.query('DELETE FROM users WHERE id = ?', [id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User Data has been deleted' });
    });
}); 

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
    });
module.exports = app;
