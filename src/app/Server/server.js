// const express=require('express');
// const bodyParser=require('body-parser');
// const cors=require('cors');

// const PORT=3500;

// const app=express();

// app.use(bodyParser.json());

// app.use(cors());

// app.get('/',function(req,res){
//   res.send("hello")
// })
// app.listen(PORT,function(){
//     console.log("port Run ",PORT);
// });

// ////EndPoint access from angular

// app.post('/auth',function(req,res){
//     console.log(req.body);
//     res.status(200).send({"data":"Rescived Successfully"})
// })



const { parse } = require('querystring');
var express=require('express')
var app=express();
const mainfile = require("./function");
var port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    	res.render('homePage');
});

app.get('/Signin', function(req, res) {
    res.render('Signin');
});

app.get('/Login', function(req, res) {
    res.render('Login');
});

app.post('/Login', function(req, res) {
    var result= mainfile.check(req.body);
    if(result==false){
            res.status(404)
            res.send("you entered email doesn’t exist please signup")
        }else if(result=="you entered wrong email"||result=="you entered wrong password"){
            res.status(404)
            res.send(result)
        }
        else{
                var jsonm = JSON.parse(result);
                res.render('profile',{name:jsonm.name});
            }
    
});
app.post('/Signin', function(req, res) {
    var data= mainfile.add(req.body)
    if(!data){
        res.render('Login');
    }else{
       res.send("email already exist")
    }
});
app.listen(port);