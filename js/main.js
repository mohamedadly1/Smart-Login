
function loginbtn(){

    if(email.value==""||password.value==""){
        document.getElementById("wrong").innerHTML="All inputs is Required"
      
    }else if  (emailvalid()            ) { 
       
        window.location="Home.html";
    }else{
        document.getElementById("wrong").innerHTML="incorrect email or password"
    }

}

var nameup=document.getElementById("nameup")
var passwordup=document.getElementById("passwordup")
var emailup=document.getElementById("emailup")

var email=document.getElementById("email")
var password=document.getElementById("password")

var users=[]


if(localStorage.getItem("users") != null){
    users=JSON.parse(localStorage.getItem("users"));
    
}




function logupbtn(){
    if(nameup.value==""||passwordup.value==""||emailup.value==""){
        document.getElementById("wrong").innerHTML="All inputs is Required"
    }else if( emailexist()){

        document.getElementById("wrong").innerHTML="email already exists"



    }else if(!validname()){
        document.getElementById("wrong").innerHTML="Name Not Valid"
       
    }
    else if(!validemaill()){
        document.getElementById("wrong").innerHTML="Email Not Valid"
       
    }else if(!validpass()){
        document.getElementById("wrong").innerHTML="Password Not Valid"
       
    }
    
    
    
    else{
      
    var user={
        name:nameup.value,
      
        emaill:emailup.value,
        password:passwordup.value,
        
      } 
      users.push(user);
      console.log(user);
      localStorage.setItem("users",JSON.stringify(users));
      document.getElementById("right").innerHTML="success"
      window.location="index.html";

    }




function emailexist(){
    for(var i =0 ; i<users.length ;i++)
    {
if(users[i].emaill == emailup.value )
{
return true
 
}
    }
    
}




}




function emailvalid() {
  
    for(var i =0 ; i<users.length ;i++) {
       
        if(users[i].emaill === email.value && users[i].password === password.value)
         {
            localStorage.setItem("userr",JSON.stringify(users[i].name));
            return true;
           
        }
    }
} 



function validpass(){
    var regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return regex.test(passwordup.value)
}



passwordup.addEventListener("click",function(){

alert("Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:")


})





emailup.addEventListener("click",function(){

    alert("'example123@example.com'.")
    
    
    })


function validemaill(){
    var regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(emailup.value)
}




function validname(){
    var regex= /\b[a-zA-Z]{3,10}\b$/
    return regex.test(nameup.value)
}

nameup.addEventListener("click",function(){

    alert("Name must be at least 3 letter without chracter and numbers:")
    
    
    })