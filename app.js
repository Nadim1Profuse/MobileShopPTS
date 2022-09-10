const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/mobileShopDB");

// **********Schema For Users Registration**************//

const userSchema={
    name:String,
    mobNumber: Number,
    expectetedRange:String,
    intrestedIn:String,
    email:String,
    password : String
    
}


// **********Schema For Owner Registration**************//

const ownerSchema={
    name:String,
    email:String,
    password:String
}

// **********Schema For Distrbuter Invoice or Stocklist**************//

//Invoice Number
//Distributer Name
//Gst. Number og dist.
//item Number
//Brand Name
//Model Name
//Varrinet
//Color
//price/unit
//Quantity
//total Amount
//Net Amount

//Payment Method
//Amount Paid
//Amount Balance




// **********Model And Collection  For Users**************//

const User=mongoose.model("User",userSchema);

// **********Model And Collection  For Owner**************//

const Owner=mongoose.model("Owner",ownerSchema);




// **********Get Request For Home Page /Owner Login**************//

app.get("/",function(req,res){
    res.sendFile(__dirname+"/login.html");
});

// **********Get Request For Customer Registration**************//

app.get("/register",function(rec,res){

    res.sendFile(__dirname+"/register.html");

});

// **********Get Request For Owner Login**************//

app.get("/ownerlogin",function(req,res){
    res.sendFile(__dirname+"/ownerLogin.html")
});

// **********Get Request For Owner Registration**************//

app.get("/ownerRegister",function(req,res){
    res.sendFile(__dirname+"/ownerReg.html");
});





// **********Post Request For Customer Registration**************//

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


// **********Post Request For Customer Login**************//

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


// **********Post Request For Owner Login**************//

app.post("/ownerlogin",function(req,res){
    
    console.log(req.body);
    res.send(`<h2>Welcom to Admin Panel Mr. <h1> ${req.body.ownerId}</h1></h2>`)
    

})



// **********Post Request For Owner Registarion**************//

app.post("/ownerRegistration",function(req,res){

    console.log(req.body);

    console.log("id="+req.body.ownerId)
    console.log("name= "+req.body.ownerName)
    console.log("password="+req.body.password)

    const newOwner=new Owner({
        name:req.body.ownerName,
        email:req.body.ownerId,
        password:req.body.password
    });

    newOwner.save(function(err){
        if(!err){
            res.send(`<h2>You are Succesfully registered to Admin Panel <br/> Mr. <h1> ${req.body.ownerName}</h1></h2>`);

        }else{
            console.log(err);
        }
            
        
    });

});







// **********Listeninig Port**************//

app.listen(3000,function(req,res){
    console.log("Server is running on localhost 3000");
});
