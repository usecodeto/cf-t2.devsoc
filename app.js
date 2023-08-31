const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port = 8000;
const fs = require('fs');
const { File } = require('buffer');
const { fileURLToPath } = require('url');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/devsoc');
    console.log("connected succesfully")
}


//express etuff
app.use('/static' , express.static('static'))
app.use(express.urlencoded())

//pug stuff
app.set('view engine' , 'pug')   // set the template engine
app.set('views' , path.join(__dirname , 'templates'))  //set the views directory

//mongoose stuff
const contactSchema = new mongoose.Schema({
    username: String,
    rating: Number
});

const Contact = mongoose.model('Contact', contactSchema);

app.get('/' , (req , res)=> {
    res.status(200).render('home.pug')
})

app.post('/' , (req , res)=> {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.render("home.pug")
    }).catch(()=>{
        res.status(400).send("<h1>Couldn't save to Database</h1>")
    })
})

//START SERVER
app.listen(port , ()=>{
    console.log(`"this server using express is working on port ${port}... "`)
})
