var express = require('express');
var bodyparser = require('body-parser');
var app = express();
const twilio = require('twilio');
// var mongoose = require('mongoose');

//create database
// mongoose.connect(mongodb://<sarthaksharma>:<abcblood>@ds013579.mlab.com:13579/blood)
app.use(express.static('public'))


app.set('view engine','ejs');
app.listen(3000, () => {
    console.log("Listening on port 3000!")
});

// //create schema

// var bloodschema = new mongoose.Schema({
//     firstname: String
//     ,lastname: String
//     ,dob : Date
//     ,bldgrp: String
//     ,phn : Number
// })
// app.use(express.static(''));

// app.use(express.static('/public'))

 app.get('/', function(req, res){
 res.sendFile(__dirname + '/1a.html')
 });

 function checkCredentials(data, carno,) {
    console.log(data);
    console.log(carno);

    for(let i=0; i<data.length; i++){
        if(carno == data[i].carno ){
            phn = data[i].phn;
            console.log(phn);
            console.log('success');
            
            const accSid = "AC7461c843aad174daae516d26a92a6e31";
     const authToken = "cef7a23385cb5236fc9e6f0151879737";
     const client = require('twilio')(accSid, authToken);
    
     client.calls.create(
       {
        url: 'https://pastebin.com/raw/DVbVckd0',
         to: '+919971804516',
         from: '+14695186067',
       },
       (err, call) => {
        if(err){console.log(err);}
   else{
         console.log(call.sid);
       }}
     );

            break
        } else {
            console.log("invalid credentials");
            
        }
    }
}







// app.get('/style.css', function(req, res) {
//     res.sendFile(__dirname + "/" + "style.css")
// })