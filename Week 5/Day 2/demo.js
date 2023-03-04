const { MongoClient } = require("mongodb");


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

const client = new MongoClient("mongodb://localhost:27017/");

const createTable = async() => {
    const connect = await client.connect();
    const collection = await client.createCollection("Dummy");
    console.log(collection);
    client.close();
}

createTable();
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "ABC", address: "Ahmedabad" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });