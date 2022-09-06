const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema={
    name:String,
    mobNumber: Number,
    intrestedIn:String,
    expectetedRange:String,
    email:String,
    password : String
    
}

const User=mongoose.model("User",userSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/login.html");
});

app.get("/register",function(rec,res){

    res.sendFile(__dirname+"/register.html");

})

app.post("/register",function(req,res){

    console.log(req.body);
    
    const newUser=new User({

    name:req.body.name,
    mobNumber: req.body.mobNumber,
    intrestedIn:req.body.phone,
    ExpectetedRange:req.body.range,
    email:req.body.email,
    password : req.body.password
});

newUser.save(function (err) {
    if(!err){
        res.send(`<h2>Thanks For Registration Mr/Mrs. <h1> ${req.body.name}</h1></h2> <a href="/"><button>Login</button></a>`);
    }else{
        console.log(err);
    }
})

})

app.post("/login",function(req,res){

    console.log(req.body);
   
    User.findOne({mobNumber:req.body.userName},function(err,foundUser){
        if(!err){
            if(foundUser.password===req.body.password){
                
                res.send(`<h2>You Are Successfully LogedIn <h1> ${foundUser.name}</h1></h2>`);
            }else{
                res.send("User id And Password Dosen't Matched ");
            }
        }else{
            console.log(err);
        }
    })
})








app.listen(3000,function(req,res){
    console.log("Server is running on localhost 3000");
});
