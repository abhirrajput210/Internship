var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Abhi@0097",
    database : "mydb"
});

// ---------- For Creating Connections ----------

// con.connect(function(err){
//     if(err) throw err;
//     console.log("Connected");
// });

// ---------- For Creating Database ----------

// con.connect(function(err){
//     if(err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb",function(err,result){
//         if(err) throw err;
//         console.log("Database Created");
//     })
// })

// ---------- Creating A Table ----------

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// ---------- Creating Table With One Primary Key ----------

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


// ---------- If Table Already Exists Use The Alter Table Query ----------

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table altered");
//   });
// });


// ---------- Inserting Record In Table ----------

// con.connect(function(err){
//     if(err) throw err;
//     console.log("Connected");
//     var sql = "INSERT INTO customers (name,address) VALUES ('Company Name','Company Address')"
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log("1 Record Inserted Successfully");
//     })
// })


// ---------- Inserting Multiple Records In The Table ----------

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows+" Inserted Id :"+result.insertId);
//   });
// });


// ---------- For Displaying Records From The Table ----------

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// ---------- For Displaying Particular Columns From The Table ----------

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name FROM customers", function (err, result, fields) {
//     if (err) throw err;
    // console.log(result);

// ---------- For Displaying Particular Data From The Table ----------

//     console.log(result[2].address);
//   });
// });



// ---------- Where Clause Example ----------

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// ---------- Wildcard Example----------

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// ---------- Order By Example For Ascending Order ----------

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// ---------- Order By Example For Descending Order ----------

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// ---------- Delete From Examples ----------

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });



// ---------- Update Examples -----------

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Sideway 1633'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });



// ---------- Create Second Table For Performing Drop Table Operation---------- 

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customersNew (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });



// ---------- Drop Table Example ----------

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE customersNew";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });


// ---------- Limit Example For Displaying Limited Records----------

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// ---------- Creating Tables For Performing The Join Operations ----------

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product varchar(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
//      var values = [
//     ['John', 154],
//     ['Peter', 154],
//     ['Amy', 155],
//     ['Hannah', ""],
//     ['Michael', ""],
//   ];
//   var sql = "INSERT INTO users (name, favorite_product) VALUES ?";
 
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows+" Inserted Id :"+result.insertId);
//   });
// });
// });

// --------- Join Example  ----------
 

// con.connect(function(err) {
//     if (err) throw err;
    // console.log("Connected!");
    // var sql = "CREATE TABLE products (id INT, name VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

    // var values = [
    //       [154, 'Chocolate Heaven'],
    //       [155, 'Tasty Lemons'],
    //       [156, 'Vanilla Dreams'],
    //     ];
    //     var sql = "INSERT INTO products (id, name) VALUES ?";
       
    //     con.query(sql, [values], function (err, result) {
    //       if (err) throw err;
    //       console.log("Number of records inserted: " + result.affectedRows+" Inserted Id :"+result.insertId);
    //     });


    // ---------- Full Join Example ----------

      // var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
      // con.query(sql, function (err, result) {
      //   if (err) throw err;
      //   console.log(result);
      // });


    // ---------- Left Join Example ----------

    // var sql  = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";
    // con.query(sql, function (err, result) {
    // if (err) throw err;
    //     console.log(result);
    // });


    // ---------- Right Join Example ----------

//     var sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//           console.log(result);
//       });
// });


