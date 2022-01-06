const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req,res){
    res.send('Hello from the server and from Harsh ! ')
})

//creating the end point to which our angular app will post the form data to
//req.body contains the userdata that was submitted by the angular application 
app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"Date received! "})
})

app.listen(PORT,function(){
    console.log("Server is running on the Port no.-",PORT);
})
