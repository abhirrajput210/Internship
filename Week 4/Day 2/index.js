// node init -y
// ----- Create Package.json file with default options

// npm install express formidable nodemon
// Install All 3 Libraries

// Import Express Library
const express = require('express')

const formidable = require('formidable')

const app = express()

app.get('/',(req,res) =>{
     res.sendfile(__dirname+'/index.html')
})

app.post('/',(req,res) =>{
    var form = new formidable.IncomingForm()

    form.parse(req)

    form.on('fileBegin',function(name,file){
        file.path = __dirname+'/uploads'+file.name
    })

    form.on('file',function(name,file){
        console.log("Uploaded FIle"+file.name);
    })

    res.sendFile(__dirname+'/index.html')

})

app.listen(5000, () =>{
    console.log("App Is Running On 5000");
})