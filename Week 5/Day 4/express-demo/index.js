const Joi = require('joi');
const express = require('express');
const func = require('joi/lib/types/func');
const app =express();

app.use(express.json())

const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
    {id:4, name:'course4'},
    {id:5, name:'course5'},
];

// -------------------- Handling Get Request --------------------

app.get('/',(req,res) =>{
    res.send("Hello World!! Good Afternoon")
});

app.get('/api/courses',(req,res) =>{
    res.send(courses);
});

// app.get('/api/courses/:id',(req,res) =>{
//     res.send(req.params.id);
// });

// app.get('/api/posts/:year/:month',(req,res) =>{
//     res.send(req.params);
// });

app.get('/api/courses/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The Course With The Given Id Was Not Found');
    res.send(course);
});

app.post('/api/courses',(req,res) => {

    const {error}  = validateCourse(req.body);

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const course = {
        id: courses.length+1,
        name : req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The Course With The Given Id Was Not Found');

    const {error}  = validateCourse(req.body);

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The Course With The Given Id Was Not Found');

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
});

function validateCourse(course){
    const schema ={
        name : Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(3000,() => console.log(`Listening On Port ${port}`));

