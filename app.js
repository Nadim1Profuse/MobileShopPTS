const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/mobileShopDB");


// ##############*** Schemas Start from Here ***###############

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

// **********Schema For adding  New Mobile Model**************//

const addModelSchema={
    brandName:String,
    modelName:String,
    varrient:{
        type:String
    },
    color:{
        type:String
    }
}

// **********Schema For adding New Accessories**************//

const addAccessoriesSchema={
    itemName:String,
    itemSpecs1:String,
    itemSpecs2:String
}



// **********Schema For adding Distributer Detail **************//

const distributerSchema={
    name:String,
    gstNumber:String,
    address:String,
    contactNumber:Number
}

// **********Schema For adding/Update Mobile's Stock**************//

const mobileStockSchema={
    brandName:String,
    modelName:String,
    varrient:String,
    color:String,
    quantity:Number,
}

// **********Schema For adding/Update Accessories's Stock**************//

const accessoriesStockSchema={
    itemName:String,
    itemSpecs1:String,
    itemSpecs2:String,
    quantity:Number
}

// **********Schema For Distributer Invoice**************//

const distributerInvoiceSchema={
    invoiceNumber:Number,
    distributerName:String,
    gstNumber:Number,
    productDetails:String,
    productQuantity:Number,
    netAmount:Number,
    amountPaid:Number,
    paymentMode:String,
    balanceAmount:Number
}

// **********Schema For Customer Mobile Invoice**************//

const customerMobileInvoiceSchema={
    invoiceNumber:Number,
    customerName:String,
    customerMobNumber:Number,
    customerDOB:Date,
    mobBrand:String,
    mobModel:String,
    mobVarrient:String,
    mobColor:String,
    imeiNumber1:String,
    imeiNumber2:String,
    paymentMode:String,
    mobPrice:Number
}



// ##############*** Models and Collections Start from Here ***###############



// **********Model And Collection  For Users**************//

const User=mongoose.model("User",userSchema);

// **********Model And Collection  For Owner**************//

const Owner=mongoose.model("Owner",ownerSchema);


// **********Model And Collection for adding Mobile Model**************//

const MobileModel=mongoose.model("Mobile_Model",addModelSchema);


// **********Model And Collection for adding New Accessories**************//


const Accessories=mongoose.model("Accessories",addAccessoriesSchema);


// **********Model And Collection for adding New Distributers**************//

const Distributer=mongoose.model("Distributer",distributerSchema)


// **********Model And Collection for adding/update Mobile's Stock**************//

const MobileStock=mongoose.model("Mobile_Stock",mobileStockSchema);

// **********Model And Collection for adding/update Accessories's Stock**************//

const AccessoriesStock=mongoose.model("Accessories_Stock",accessoriesStockSchema);


// **********Model And Collection for Distributer's Invoice**************//

const DistributerInvoice=mongoose.model("Distributer_Invoice",distributerInvoiceSchema);



// **********Model And Collection for Customer's Mobile Invoice**************//

const CustomerMobileInvoice=mongoose.model("Customer_Mobile_Invoice",customerMobileInvoiceSchema);


// ##############*** Get Requests Start from Here ***###############

// **********Get Request For Home Page /Owner Login**************//

app.get("/",function(req,res){

    res.sendFile(__dirname+"/dashboard.html");
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

// **********Get Request For Distributer Invoice**************//

app.get("/distributerInvoice",function(req,res){
    res.sendFile(__dirname+"/distributerInvoice.html");
})

// **********Get Request Customer Invoice**************//

app.get("/customerInvoice",function(req,res){
    res.sendFile(__dirname+"/customerInvoice.html")
})

// **********Get Request For Add Distributer**************//


app.get("/distributerInvoice",function(req,res){
    res.sendFile(__dirname+"//distributerInvoice.html")
})

app.get("/addNewDistributer",function(req,res){
    res.sendFile(__dirname+"/addNewDist.html")
})

// **********Get Request For Add New Mobile Model**************//

app.get("/addMbModel",function(req,res){
    res.sendFile(__dirname+"/newMobileModel.html")
})

// **********Get Request For Add New Accessories**************//

app.get("/newAccessories",function(req,res){
    res.sendFile(__dirname+"/newAccessories.html")
})

// **********Get Request For Updating Mobile Stock**************//

app.get("/updateMobileStock",function(req,res){
    res.sendFile(__dirname+"/updateMobileStock.html")
})



app.get("/updateAccStock",function(req,res){
    res.sendFile(__dirname+"/updateAccStock.html")
})



// ##############*** Post Resquests Start from Here ***###############

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
    res.sendFile(__dirname+"/dashboard.html")
    

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

// **********Post Request For Adding New Mobile Model**************//

app.post("/addNewModel", function(req,res){
    console.log(req.body);

    const newModel=new Model({

    brandName:req.body.brandName,
    modelName:req.body.modelName,
    varrient:req.body.varrient,
    color:req.body.color
   });

   newModel.save(function(err){
    if(!err){
        res.send("successfully created new model." );
    }else{
        console.log(err);
    }
   })

});


// **********Post Request For Adding New Accessories Item**************//
app.post("/newAccessories",function(req,res){


    const newAccessories=new Accessories({

        itemName:req.body.itemName,
        itemSpecs1:req.body.itemSpecs1,
        itemSpecs2:req.body.itemSpecs2
    
    })

    newAccessories.save(function(err){
        if(!err){
            res.send(`successfully added New accessories item of ${req.body.itemName}`);
        }
    })
    
});


// **********Post Request For Adding New Distributer**********

app.post("/addDistributer",function(req,res){

    const newDistributer=new Distributer({

    name:req.body.name,
    gstNumber:req.body.gstNumber,
    address:req.body.address,
    contactNumber:req.body.contactNumber

    })

})






// **********Listeninig Port**************//

app.listen(3000,function(req,res){
    console.log("Server is running on localhost 3000");
});
