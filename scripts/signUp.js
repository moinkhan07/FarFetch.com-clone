document.getElementById('registerButton').addEventListener("click",function(){
    if(document.getElementById("name").value!="" && document.getElementById("email").value!="" && document.getElementById("password").value!="")
    {
        addDetails();
    }
    else{
        alert("Please Enter Valid User Details")
    }
    
});


let addDetails = ()=>{
    const uName = document.getElementById('name').value;
    const uEmail = document.getElementById('email').value;
    const uPassword = document.getElementById('password').value;

    // console.log(uName,uEmail,uPassword)

    let userObj={
        userName : uName,
        userEmail : uEmail,
        userPassword : uPassword
    }

    console.log(userObj)

    localStorage.setItem("userDetails",JSON.stringify(userObj))
    alert(`Dear ${uName}, your account created succesfully`)
    window.location.href="signIn.html"
}

document.getElementById('sigInExt').addEventListener("click",()=>{
    window.location.href="signIn.html"
});