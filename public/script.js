//java script for login.html
function Validation() {
    
    var userInput = document.getElementById("mobilenumber").value;
    
    if(isNaN(userInput)){
        document.getElementById("message").innerHTML="** Enter Only Numeric Value **";
        return false;
    };
    if(userInput ===""){
        document.getElementById("message").innerHTML="** Please Fill Mobile Number **";
        return false;
    };

  
    if(userInput.length<10){
        document.getElementById("message").innerHTML="** Mobile Number Must be 10 Digit **";
        return false;
    }
    if(userInput.length>10){
        document.getElementById("message").innerHTML="** Mobile Number Must be 10 Digit **";
        return false;
    }if((userInput.charAt(0)!=9) && (userInput.charAt(0)!=8) && (userInput.charAt(0)!=7)){
        document.getElementById("message").innerHTML="** Please Enter Valid Mobile Number **";
        return false;
    }else{
        document.getElementById("message").innerHTML="";
    }

    var passInput = document.getElementById("pass").value;

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    
    if(passInput === ""){
      
     document.getElementById("password").innerHTML="** Please Fill Password **";
        return false;
    }if(passInput.length<8){
        
         document.getElementById("password").innerHTML="** Password length must be atleast 8 characters **";
        return false;
     }if(passInput.length>15){
            document.getElementById("password").innerHTML="** Password length must not exceed 15 characters **";
            return false;
        }if(passInput.search(/[0-9]/)==-1){
            document.getElementById("password").innerHTML="** Password Of Atleast 1 Numeric Charcter in the Box **";
            return false;
        }if(passInput.search(/[a-z]/)==-1){
            document.getElementById("password").innerHTML="** Password Of Atleast 1 Lower Case Charcter in the Box **";
            return false;
        }if(passInput.search(/[A-Z]/)==-1){
            document.getElementById("password").innerHTML="** Password Of Atleast 1 Upper Case Charcter in the Box **";
            return false;
        }if(passInput.search(/[!\@\#\$\%\^\&\*]/)==-1){
            document.getElementById("password").innerHTML="** Password Of Atleast 1 Special Charcter in the Box **";
            return false;
        }else{
            document.getElementById("password").innerHTML="";
        }
      

 }

 function myFunction() {
    var showPassword = document.getElementById("pass");
    if (showPassword.type === "password") {
        showPassword.type = "text";
    } else {
        showPassword.type = "password";
    }
  }

 
function Validation() {
    
    var userInput = document.getElementById("mobilenumber").value;
    
    if(isNaN(userInput)){
        document.getElementById("message").innerHTML="** Enter Only Numeric Value **";
        return false;
    };
    if(userInput ===""){
        document.getElementById("message").innerHTML="** Please Fill Mobile Number **";
        return false;
    };

  
    if(userInput.length<10){
        document.getElementById("message").innerHTML="** Mobile Number Must be 10 Digit **";
        return false;
    }
    if(userInput.length>10){
        document.getElementById("message").innerHTML="** Mobile Number Must be 10 Digit **";
        return false;
    }if((userInput.charAt(0)!=9) && (userInput.charAt(0)!=8) && (userInput.charAt(0)!=7)){
        document.getElementById("message").innerHTML="** Please Enter Valid Mobile Number **";
        return false;
    }else{
        document.getElementById("message").innerHTML="";
    }

    var passInput = document.getElementById("pass").value;

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    
    if(passInput === ""){
      
     document.getElementById("password").innerHTML="** Please Fill Password **";
        return false;
    }if(passInput.length<8){
        
         document.getElementById("password").innerHTML="** Password length must be atleast 8 characters **";
        return false;
     }if(passInput.length>15){
            document.getElementById("password").innerHTML="** Password length must not exceed 15 characters **";
            return false;
        }if(passInput.search(/[0-9]/)==-1){
            document.getElementById("password").innerHTML="** Password Of Atleast 1 Numeric Charcter in the Box **";
            return false;
        }if(passInput.search(/[a-z]/)==-1){
            document.getElementById("password").innerHTML="** Password Of Atleast 1 Lower Case Charcter in the Box **";
            return false;
        }if(passInput.search(/[A-Z]/)==-1){
            document.getElementById("password").innerHTML="** Password Of Atleast 1 Upper Case Charcter in the Box **";
            return false;
        }if(passInput.search(/[!\@\#\$\%\^\&\*]/)==-1){
            document.getElementById("password").innerHTML="** Password Of Atleast 1 Special Charcter in the Box **";
            return false;
        }else{
            document.getElementById("password").innerHTML="";
        }
      

 }

 function myFunction() {
    var showPassword = document.getElementById("pass");
    if (showPassword.type === "password") {
        showPassword.type = "text";
    } else {
        showPassword.type = "password";
    }
  }

 
